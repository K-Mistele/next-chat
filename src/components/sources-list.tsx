'use client'

import {use} from 'react'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel'
import {Card, CardContent} from '@/components/ui/card'

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
                        <CarouselItem key={idx}
                                      className={' md:basis-1/2 lg:basis-1/3 xl:basis-1/4'}>
                            <div className={'p-1'}>
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{idx + 1}</span>
                                    </CardContent>
                                </Card>
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