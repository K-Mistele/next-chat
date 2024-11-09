'use client'

import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'
import {Button} from '@/components/ui/button'
import type {JSONValue, Message} from 'ai'
import {useState, Suspense, useMemo, memo} from 'react'
import {
    BookCheckIcon,
    ChevronsUpDown,
    ImagesIcon,
} from 'lucide-react'

import {ImageGallery} from '@/components/image-gallery'
import {ImageGalleryLoading} from '@/components/loading/image-gallery-loading'

import {EnhancedMarkdown} from '@/components/enhanced-markdown'
import type {StreamedMessageAnnotationMessage, Source, StreamedDataMessage} from '@/lib/ai/types'
import {QueryStatus} from '@/components/query-status'
import {RewrittenQueryBadge} from '@/components/rewritten-query-badge'
import {KeywordsBadge} from '@/components/keywords-badge'
import {QuerySourcesList} from '@/components/query-sources-list'

export interface AnswerBlockProps {
    answer: Message | null
    data: Array<JSONValue> | undefined

}

// Memoize the component!
export const AnswerBlock = memo(
    function AnswerBlock({answer, data}: AnswerBlockProps) {
        const [sourcesIsOpen, setSourcesIsOpen] = useState<boolean>(true)

        const [finishSignalReceived, setFinishedSignalReceived] = useState<boolean>(false)
        const status = useMemo<string | undefined>(() => {

            console.log(`status useMemo running`)
            const statusUpdates = data?.filter(
                (msg: JSONValue) => (msg as StreamedDataMessage).type === 'statusUpdate'
            ) as Array<StreamedDataMessage> | undefined

            if (statusUpdates && statusUpdates.length) {
                const lastUpdate = statusUpdates[statusUpdates.length - 1]
                if (lastUpdate?.type === 'statusUpdate' && lastUpdate.status === 'done') {
                    setFinishedSignalReceived(true)
                }
                switch (lastUpdate.status) {
                    case 'optimizing':
                        return 'Understanding query and extracting keywords...'
                    case 'researching':
                        return 'Searching for relevant documentation...'
                    case 'generating':
                        return 'Writing an answer...'
                    case 'done':
                        return 'Query completed!'
                    default:
                        return 'Thinking...'
                }
            }
            else {
                return 'Thinking...'
            }

        }, [data?.length, finishSignalReceived])

        // Extract rewritten query
        const rewrittenQuery = useMemo<string | null>(() => {

            console.log(`rewrittenQuery useMemo running`)
            if (!answer?.annotations) return null
            const annotations = answer?.annotations as Array<StreamedMessageAnnotationMessage>
            if (!annotations) return null
            const annotation = annotations.find((annotation: StreamedMessageAnnotationMessage) => annotation.type === 'rewrittenQuery')
            return annotation
                ? annotation.query
                : null

        }, [answer?.annotations?.length])

        // Memo for keywords
        const keywords: Array<string> = useMemo<Array<string>>(() => {

            console.log(`keywords usememo running`)
            const keywords: Array<string> = []
            if (!answer?.annotations) return keywords
            const annotations = answer.annotations as Array<StreamedMessageAnnotationMessage>
            const keywordsAnnotation = annotations.find((annotation: StreamedMessageAnnotationMessage) => annotation.type === 'extractedKeywords')
            if (keywordsAnnotation) keywords.push(...keywordsAnnotation.keywords)
            return keywords

        }, [answer?.annotations?.length])

        // memo for images data
        const imagesData = useMemo<Array<{ url: string, alt: string }> | null>(() => {

            console.log(`imagesData useMemo running`)
            let images = null;
            if (!answer?.annotations) return images
            const annotations = answer?.annotations as Array<StreamedMessageAnnotationMessage>
            if (!annotations || !annotations.length) return null
            const imagesAnnotation = annotations.find((annotation: StreamedMessageAnnotationMessage) => annotation.type === 'relatedImages')
            if (imagesAnnotation) images = imagesAnnotation.imageData
            console.log(`Got images:`, images)
            return images;

        }, [answer?.annotations?.length])

        // memo for sources
        const sources = useMemo<Array<Source> | undefined | null>(() => {

            console.log(`sources useMemo running`)
            let chunks: Array<Source> | undefined = undefined;
            const annotations = answer?.annotations as undefined | Array<StreamedMessageAnnotationMessage>
            if (annotations) {
                const sourcesAnnotation = annotations.find((annotation) => annotation.type === 'sources')
                if (sourcesAnnotation) {
                    chunks = sourcesAnnotation.sources
                }
            }
            return chunks?.slice(0, 10)
        }, [answer?.annotations?.length])

        return (
            <>
                <div className={'flex flex-col gap-y-2'}>

                    {/* Section: rewritten query*/}
                    <section id={'query-details'} className={'flex flex-col gap-y-2 pt-2 pb-0 w-full'}>
                        {/* Memoizations to prevent so many re-renders*/}
                        <QueryStatus finishSignalReceived={finishSignalReceived} status={status}/>
                        <RewrittenQueryBadge rewrittenQuery={rewrittenQuery}/>
                        <KeywordsBadge keywords={keywords}/>
                    </section>

                    <div className={'w-full flex flex-col lg:grid grid-cols-12 gap-8'}>
                        <div className={'col-span-8 flex flex-col gap-y-2 pb-1'}>
                            {/* Section: sources*/}
                            <section id={'sources'} className={'pt-2 w-full'}>
                                <Collapsible open={sourcesIsOpen} onOpenChange={setSourcesIsOpen}>
                                    <QuerySourcesList sources={sources}/>
                                </Collapsible>
                            </section>

                            {/* answer*/}
                            <section id={'answer'} className={'pt-2'}>
                                <h2 className={'flex items-center leading-none pt-2 pb-4'}>
                                    <BookCheckIcon className={'size-6 mr-2'}/>
                                    Answer
                                </h2>
                                {/*<Separator className={'mt-2 mb-4'}/>*/}

                                {/* Load the content OR a loading state*/}
                                {
                                    answer?.content.length
                                        ? <EnhancedMarkdown name={'answer'}>{answer?.content}</EnhancedMarkdown>
                                        : <></>
                                }

                            </section>
                        </div>
                        <div className={'order-first lg:order-last col-span-4 flex flex-col'}>
                            {/* Section: images*/}
                            <section id={'images'} className={'pt-2 pb-0 w-full'}>

                                <div className={'flex flex-row justify-between items-center'}>
                                    <h2 className={'flex items-center leading-none pt-2 pb-4'}>
                                        <ImagesIcon className={'size-6 mr-2'}/>
                                        Images
                                    </h2>
                                </div>

                                {/* TODO list - show 3, plus fourth option to click and show 5 - replace, plus new row*/}
                                {
                                    imagesData
                                        ? <ImageGallery images={imagesData}/>
                                        : <ImageGalleryLoading/>
                                }

                            </section>
                        </div>
                    </div>


                </div>
            </>
        )
    })