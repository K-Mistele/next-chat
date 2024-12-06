'use client'

import {useChat} from 'ai/react'
import {generateId, JSONValue} from 'ai'
import {useEffect, memo, useState, useMemo} from 'react'
import {QueryWithAnswer} from '@/lib/query-with-answer'
import {AnswerPanel} from '@/components/answer-panel'
import {StatusUpdate, StreamedDataMessage} from '@/lib/ai/types'
import {useRouter} from 'next/navigation'
import {HotKeys} from 'react-hotkeys'
import {toast} from 'sonner'


const keyMap = {
    NEW_QUERY: ["control", "k"],
    NEW_QUERY_2: ["command", "k"]
}

export interface ConversationPanelProps {
    id: string
    query: string
}


// eslint-disable-next-line react/display-name
export const ConversationPanel = memo(({id, query}: ConversationPanelProps) => {
    const [pastQueries, setPastQueries] = useState<Array<QueryWithAnswer>>([])
    const [currentQuery, setCurrentQuery] = useState<QueryWithAnswer>({query})
    const [finishSignalReceived, setFinishedSignalReceived] = useState<boolean>(false)


    // TODO initial messages should be looked up in parent RSC, and populated. if not
    const {
        messages,
        data,
        input,
        setInput,
        setData,
        append,
    } = useChat({
        id: id,
        api: `/api/chat`,
        onResponse: (response) => {
            console.log(`Response received at ${new Date().toTimeString()}`)
            if (response.status === 429) {
                toast.error(`Too many requests! Please try again in a bit.`)
            }
        },
        onFinish: ({content}) => {
            setCurrentQuery(current => ({
                ...current,
                content
            }))
        },
        experimental_throttle: 100 // prevent too many component updates, at 50tkps you're at 20ms
    })

    //  Set query to first user message
    useEffect(() => {
        append({role: 'user', content: query, id: generateId()})
    }, [])


    async function newQuery(query: string) {
        // TODO push current query to past queries

        // TODO set finishSignalReceived to true

        // TODO flush data stream

        // TODO push new query

    }

    // Create a single memo for the data stream so that once the stream is cleared for a new message,
    //  the statuses here don't update
    useEffect(() => {
        if (finishSignalReceived) {
            return
        }

        // Handle status update processing
        const statusUpdates = data?.filter((msg: JSONValue) => (msg as StreamedDataMessage).type === 'statusUpdate') as Array<StatusUpdate> | undefined
        if (statusUpdates && statusUpdates.length) {
            const lastUpdate = statusUpdates[statusUpdates.length - 1]
            switch (lastUpdate.status) {
                case 'optimizing':
                    setCurrentQuery(currentQuery => ({
                        ...currentQuery,
                        status: 'Understanding query and extracting keywords...'
                    }))
                    break;
                case 'researching':
                    setCurrentQuery(currentQuery => ({
                        ...currentQuery,
                        status: 'Searching for relevant documentation...'
                    }))
                    break;
                case 'generating':
                    setCurrentQuery(currentQuery => ({
                        ...currentQuery,
                        status: 'Writing an answer...'
                    }))
                    break;
                case 'done':
                    setCurrentQuery(currentQuery => ({
                        ...currentQuery,
                        status: 'Answer finished!'
                    }))
                    setFinishedSignalReceived(true)
                    break
                default:
                    setCurrentQuery(currentQuery => ({
                        ...currentQuery,
                        status: 'Thinking...'
                    }))
            }
        }
    }, [data?.length])

    useEffect(() => {
        if (finishSignalReceived || !data) return
        for (const msg of (data as Array<StreamedDataMessage>)) {
            if (msg.type === 'rewrittenQuery') {
                setCurrentQuery(current => ({
                    ...current,
                    rewritten: msg.query
                }))
            }
            else if (msg.type === 'extractedKeywords') {
                setCurrentQuery(current => ({
                    ...current,
                    keywords: msg.keywords
                }))
            }
            else if (msg.type === 'sources') {
                setCurrentQuery(current => ({
                    ...current,
                    sources: msg.sources
                }))
            }
            else if (msg.type === 'relatedImages') {
                setCurrentQuery(current => ({
                    ...current,
                    images: msg.imageData
                }))
            }
        }
    }, [data?.length, finishSignalReceived]);


    const lastAssistantMessage = useMemo(() => {
        const assistantMessages = messages?.filter(m => m.role === 'assistant')
        if (assistantMessages?.length) return assistantMessages[assistantMessages.length - 1]
        else return undefined
    }, [messages])
    const router = useRouter()
    return (<HotKeys keyMap={keyMap} handlers={{
            NEW_QUERY: (e) => {
                if (e) e.preventDefault()
                router.push('/')
            },
            NEW_QUERY_2: (e) => {
                if (e) e.preventDefault()
                router.push('/')
            }
        }}>
            <div>
                {/* Content*/}
                <div className={'sm:px-12 px-8 pb-14 md:pb-24 mx-auto flex flex-col space-y-3 md:space-y-4 w-full'}>

                    {
                        pastQueries.filter(q => !!q).map((q: QueryWithAnswer, idx: number) => (
                            <div className={'flex flex-col space-y-3 md:space-y-4 w-full'} key={idx}>
                                {/* Query*/}
                                <div className={'w-full mt-6 flex flex-row'} key={`q-${idx}`}>
                                    <div
                                        className={'w-full text-2xl flex flex-row items-center justify-start break-words line-clamp-2'}>
                                        {q?.query}
                                    </div>

                                </div>

                                <div className={'flex flex-col gap-y-2'} key={`a-${idx}`}>
                                    <AnswerPanel {...q} data={data} finishSignalReceived={finishSignalReceived}/>
                                </div>
                            </div>
                        ))
                    }

                    <div className={'flex flex-col space-y-3 md:space-y-4 w-full'}>
                        {/* Query*/}
                        <div className={'w-full mt-6 flex flex-row'}>
                            <div
                                className={'w-full text-2xl flex flex-row items-center justify-start break-words line-clamp-2'}>
                                {currentQuery.query}
                            </div>

                        </div>

                        <div className={'flex flex-col gap-y-2'}>
                            <AnswerPanel {...currentQuery} data={data} finishSignalReceived={finishSignalReceived}
                                         content={lastAssistantMessage?.content}/>
                        </div>
                    </div>


                </div>
            </div>
        </HotKeys>

    )

})