'use client'

import {use} from 'react'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel'
import {Card, CardContent, CardFooter} from '@/components/ui/card'
import {EnhancedMarkdown} from '@/components/enhanced-markdown'
import Image from 'next/image'
import {cn} from '@/lib/utils'
import Link from 'next/link'

export interface Source {
    text?: string
    title?: string
    icon?: string
    link?: string
}

export interface SourcesListProps {
    sources: Promise<Array<Source>>
}

export function SourcesList({sources}: SourcesListProps) {

    const sourcesList: Array<Source> = use(sources)
}

export function SourcesListCarousel({sources}: SourcesListProps) {

    const sourcesList: Array<Source> = use(sources)

    return (
        <div className={'w-full'}>
            <Carousel opts={{align: 'start', loop: false}} className={'max-w-[90%] mx-auto'}>
                <CarouselContent>
                    {sourcesList.map((source: Source, idx: number) => (
                        <CarouselItem key={idx} className={' md:basis-1/2 lg:basis-1/3 xl:basis-1/4'}>
                            <div className={cn(
                                'relative aspect-square rounded-lg text-card-foreground border bg-card',
                                'shadow-sm flex flex-col min-h-0 overflow-clip font-sans'
                            )} id={`source-card-${idx}`}>

                                <div className={'flex flex-grow text-xs min-h-0 overflow-scroll p-2'}>
                                    <EnhancedMarkdown>{source.text}</EnhancedMarkdown>
                                </div>
                                <Link
                                    href={source.link || '#'}
                                    target={'_blank'}
                                    className={'hover:underline cursor-pointer'}
                                >
                                    <div id={'bottom'}
                                        className={'w-full max-w-full flex flex-row gap-x-2 bg-foreground/10 p-2 items-center'}>

                                        {source.icon &&
                                            <div className={'size-6 relative '}>
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

}