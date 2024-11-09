'use client'

import {memo} from 'react'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel'
import {EnhancedMarkdown} from '@/components/enhanced-markdown'
import Image from 'next/image'
import {cn} from '@/lib/utils'
import Link from 'next/link'
import {Source} from '@/lib/ai/types'


export interface SourcesListCarouselProps {
    sources: Array<Source>
}

export const SourcesListCarousel = memo(
    function SourcesListCarousel(
        {sources}: SourcesListCarouselProps
    ) {
        console.log(`SourcesListCarousel re-rendered`)
        return (
            <div className={'w-full'}>
                <Carousel opts={{align: 'start', loop: false}} className={'max-w-[90%] mx-auto'}>
                    <CarouselContent>
                        {sources.map((source: Source, idx: number) => (
                            <CarouselItem key={idx} className={' md:basis-1/2 lg:basis-1/3 xl:basis-1/4'}>
                                <div className={cn(
                                    'relative aspect-square rounded-lg text-card-foreground border bg-card',
                                    'shadow-sm flex flex-col min-h-0 overflow-clip font-sans'
                                )} id={`source-card-${idx}`}>

                                    <div className={'flex flex-grow text-xs min-h-0 overflow-scroll p-2'}>
                                        <EnhancedMarkdown name={undefined}>{source.text}</EnhancedMarkdown>
                                    </div>
                                    <Link
                                        href={source.link || '#'}
                                        target={'_blank'}
                                        className={'hover:underline cursor-pointer'}
                                    >
                                        <div id={'bottom'}
                                             className={'w-full max-w-full flex flex-row gap-x-2 bg-foreground/10 p-2 items-center'}>

                                            {source.icon &&
                                                <div className={'size-6 relative aspect-square'}>
                                                    <Image src={source.icon} alt={''} fill={true}
                                                           className={'aspect-square'}/>
                                                </div>
                                            }
                                            <div className={'text-xs'}>
                                                {source?.title}
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        )
    },
    // This is a good heuristic for us since once the sources are sent via the stream, they shouldn't change!
    (prevProps: SourcesListCarouselProps, nextProps: SourcesListCarouselProps) => prevProps.sources.length === nextProps.sources.length
)