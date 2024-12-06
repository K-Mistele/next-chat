'use client'

import type {QueryAnswer, QueryWithAnswer} from '@/lib/query-with-answer'
import {memo, useState, useMemo, useEffect} from 'react'
import {JSONValue} from 'ai'
import {QueryStatus} from '@/components/query-status'
import {StatusUpdate, StreamedDataMessage} from '@/lib/ai/types'
import {RewrittenQueryBadge} from '@/components/rewritten-query-badge'
import {KeywordsBadge} from '@/components/keywords-badge'



export interface AnswerPanelProps extends QueryAnswer {
    data: Array<JSONValue> | undefined
}

export const AnswerPanel = memo(
    function AnswerPanel({content, data, rewritten, images, sources}: AnswerPanelProps) {

        const [sourcesCarouselIsOpen, setSourcesCarouselIsOpen] = useState<boolean>(true)
        const [finishSignalReceived, setFinishedSignalReceived] = useState<boolean>(false)
        const [rewrittenQuery, setRewrittenQuery] = useState<undefined|string>(undefined)
        const [keywords, setKeywords] = useState<Array<string> | undefined>(undefined)

        const [status, setStatus] = useState<string>("Thinking...")

        // Create a single memo for the data stream so that once the stream is cleared for a new message,
        //  the statuses here don't update
        useEffect(() => {
            if (finishSignalReceived) return; // never update these once the stream is finished becasue it will be wiped

            // Handle status update processing
            const statusUpdates = data?.filter((msg: JSONValue) => (msg as StreamedDataMessage).type === 'statusUpdate') as Array<StatusUpdate> | undefined
            if (statusUpdates && statusUpdates.length) {
                const lastUpdate = statusUpdates[statusUpdates.length - 1]
                switch (lastUpdate.status) {
                    case 'optimizing':
                        setStatus('Understanding query and extracing keywords...')
                        break;
                    case 'researching':
                        setStatus('Searching for relevant documentation...')
                        break;
                    case 'generating':
                        setStatus('Writing an answer...')
                        break;
                    case 'done':
                        setStatus('Query completed!')
                        setFinishedSignalReceived(true)
                        break
                    default:
                        setStatus('Thinking...')
                }
            }
        }, [data?.length])

        useEffect(() => {
            if (finishSignalReceived || !data) return
            for (const msg of (data as Array<StreamedDataMessage>)) {
                if (msg.type === 'rewrittenQuery') setRewrittenQuery(msg.query)
                else if (msg.type === 'extractedKeywords') setKeywords(msg.keywords)
            }
        }, [data?.length, finishSignalReceived]);

        return (
            <div className={'flex flex-col gap-y-2'}>

                {/* Section: rewritten query etc.*/}
                <section className={'flex flex-col gap-y-2 pt-2 pb-0 w-full'}>
                    <QueryStatus finishSignalReceived={finishSignalReceived} status={status}/>
                    <RewrittenQueryBadge rewrittenQuery={rewrittenQuery}/>
                    <KeywordsBadge keywords={keywords}/>
                </section>
            </div>
        )
    },
    function areEqual(prevProps: AnswerPanelProps, nextProps: AnswerPanelProps) {
        return (
            prevProps.content === nextProps.content &&
            prevProps.status === nextProps.status &&
            prevProps.content === nextProps.status &&
            prevProps.sources?.length === nextProps.sources?.length &&
            prevProps.images?.length === nextProps.sources?.length &&
            prevProps.data?.length === nextProps.data?.length
        )
    }
)