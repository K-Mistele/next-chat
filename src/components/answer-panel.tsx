'use client'

import type {QueryAnswer, QueryWithAnswer} from '@/lib/query-with-answer'
import {memo, useState, useMemo, useEffect} from 'react'
import {JSONValue} from 'ai'
import {QueryStatus} from '@/components/query-status'
import {StatusUpdate, StreamedDataMessage} from '@/lib/ai/types'
import {RewrittenQueryBadge} from '@/components/rewritten-query-badge'
import {KeywordsBadge} from '@/components/keywords-badge'
import {BookCheckIcon, ImagesIcon} from 'lucide-react'
import {EnhancedMarkdown} from '@/components/enhanced-markdown'
import {QuerySourcesList} from '@/components/query-sources-list'
import {Collapsible} from '@/components/ui/collapsible'
import {ImageGallery} from '@/components/image-gallery'
import {ImageGalleryLoading} from '@/components/loading/image-gallery-loading'



export interface AnswerPanelProps extends QueryAnswer {
    data: Array<JSONValue> | undefined
    finishSignalReceived: boolean
}

export const AnswerPanel = memo(
    function AnswerPanel({
        content,
        data,
        rewritten,
        images,
        sources,
        status,
        finishSignalReceived,
        keywords
    }: AnswerPanelProps) {

        const [sourcesCarouselIsOpen, setSourcesCarouselIsOpen] = useState<boolean>(true)
        const [finished, setFinished] = useState<boolean>(false)
        useEffect(() => {
            if (finishSignalReceived) setFinished(true)

        }, [finishSignalReceived])


        return (
            <div className={'flex flex-col gap-y-2'}>

                {/* Section: rewritten query etc.*/}
                <section className={'flex flex-col gap-y-2 pt-2 pb-0 w-full'}>
                    <QueryStatus finishSignalReceived={finished} status={status}/>
                    <RewrittenQueryBadge rewrittenQuery={rewritten}/>
                    <KeywordsBadge keywords={keywords}/>
                </section>

                {/* Block for the answer and related panes (sources, images)*/}
                <div className={'w-full flex flex-col lg:grid grid-cols-12 gap-8'}>

                    {/* Column for sources and answer*/}
                    <div className={'col-span-8 flex flex-col gap-y-2 pb-1'}>

                        {/* sources*/}
                        <section className={'pt-2 w-full'}>
                            <Collapsible open={sourcesCarouselIsOpen} onOpenChange={setSourcesCarouselIsOpen}>
                                <QuerySourcesList sources={sources}/>
                            </Collapsible>
                        </section>

                        {/* answer*/}
                        <section className={'w-full pt-2'}>
                            <h2 className={'flex items-center leading-nont pt-2 pb-4'}>
                                <BookCheckIcon className={'size-6 mr-2'}/>
                                Answer
                            </h2>
                            {
                                content?.length
                                    ? <EnhancedMarkdown name={undefined}>{content}</EnhancedMarkdown>
                                    : <></>
                            }
                        </section>
                    </div>

                    {/* Column for images*/}
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
                                images
                                    ? <ImageGallery images={images}/>
                                    : <ImageGalleryLoading/>
                            }

                        </section>
                    </div>
                </div>
            </div>
        )
    },
    function areEqual(prevProps: AnswerPanelProps, nextProps: AnswerPanelProps) {
        return (
            prevProps.content === nextProps.content &&
            prevProps.status === nextProps.status &&
            prevProps.rewritten === nextProps.rewritten &&
            prevProps.sources?.length === nextProps.sources?.length &&
            prevProps.images?.length === nextProps.sources?.length &&
            prevProps.data?.length === nextProps.data?.length &&
            prevProps.keywords?.length === nextProps.keywords?.length &&
            prevProps.finishSignalReceived === nextProps.finishSignalReceived
        )
    }
)