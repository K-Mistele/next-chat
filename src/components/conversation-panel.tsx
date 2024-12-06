'use client'

import {useChat} from 'ai/react'
import {generateId} from 'ai'
import {useEffect, use, memo, useState} from 'react'
import type {Message} from 'ai'
import { QueryWithAnswer} from '@/lib/query-with-answer'
import {AnswerPanel} from '@/components/answer-panel'

export interface ConversationPanelProps {
    id: string
    query: string
    existingMessages: Promise<Array<Message>>
}



// eslint-disable-next-line react/display-name
export const ConversationPanel = memo(({id, query, existingMessages}: ConversationPanelProps) => {
    const initialMessages = use(existingMessages)
    const [queries, setQueries] = useState<Array<QueryWithAnswer|undefined>>([new QueryWithAnswer(query)])

    // TODO initial messages should be looked up in parent RSC, and populated. if not
    const {
        messages,
        data,
        input,
        setInput,
        setData,
        append
    } = useChat({
        id: id,
        initialMessages: initialMessages,
        api: `/api/chat`,
        onResponse: (response) => {
            console.log(`Response received at ${new Date().toTimeString()}`)
        },
        onFinish: ({}) => {
        },
        experimental_throttle: 100 // prevent too many component updates, at 50tkps you're at 20ms
    })

    //  Set query to first user message
    useEffect(() => {
        if (!initialMessages.length) append({role: 'user', content: query, id: generateId()})
    }, [])


    return (
        // Container
        <div>
            {/* Content*/}
            <div className={'sm:px-12 px-8 pb-14 md:pb-24 mx-auto flex flex-col space-y-3 md:space-y-4 w-full'}>

                {
                    queries.filter(q => !!q).map((q: QueryWithAnswer, idx: number) => (
                        <div className={'flex flex-col space-y-3 md:space-y-4 w-full'} key={idx}>
                            {/* Query*/}
                            <div className={'w-full mt-6 flex flex-row'} key={`q-${idx}`}>
                                <div
                                    className={'w-full text-2xl flex flex-row items-center justify-start break-words line-clamp-2'}>
                                    {q?.query}
                                </div>

                            </div>

                            <div className={'flex flex-col gap-y-2'} key={`a-${idx}`}>
                                <AnswerPanel {...q.answer} data={data}/>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )

})