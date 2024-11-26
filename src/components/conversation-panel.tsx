'use client'

import {useChat} from 'ai/react'
import {generateId} from 'ai'
import {useEffect, use, memo} from 'react'
import type {JSONValue, Message} from 'ai'
import {AnswerBlock} from '@/components/answer-block'
import {ChatScrollAnchor} from '@/components/chat-scroll-anchor'

export interface ConversationPanelProps {
    id: string
    query: string
    existingMessages: Promise<Array<Message>>
}

// eslint-disable-next-line react/display-name
export const  ConversationPanel = memo(({id, query, existingMessages}: ConversationPanelProps)=>  {
    const initialMessages = use(existingMessages)
    // TODO initial messages should be looked up in parent RSC, and populated. if not
    const {
        messages,
        data,
        input,
        setInput,
        append
    } = useChat({
        id: id,
        initialMessages: initialMessages,
        api: `/api/chat`,
        experimental_throttle: 100 // prevent too many component updates, at 50tkps you're at 20ms
    })

    //  Set query to first user message
    useEffect(() => {
        if (!initialMessages.length) append({role: 'user', content: query, id: generateId()})
    }, [])

    return (
        <div>
            <div className={'px-8 sm:px-12 pb-14 md:pb-24 mx-auto flex flex-col space-y-3 md:space-y-4 w-full'}>
                {messages.map((message: Message, idx: number) => {

                    if (message.role === 'user') {
                        return (
                            <div className={'w-full mt-6'} key={idx}>
                                <div className={'flex flex-row '}>
                                    <div
                                        className={'w-full text-2xl flex flex-row items-center justify-start break-words line-clamp-2'}>
                                        {message.content}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else if (message.role === 'assistant') {
                        return (
                            <AnswerBlock answer={message} key={idx} data={data}/>
                        )
                    }
                })}
            </div>
            {/*<ChatScrollAnchor/>*/}

            {/* TODO Chat window */}
        </div>
    )
})