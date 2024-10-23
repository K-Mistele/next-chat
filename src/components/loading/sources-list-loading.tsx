import {Skeleton} from '@/components/ui/skeleton'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel'
import {useMemo} from 'react'

export function SourcesListLoading() {
    const iterable = useMemo(() => Array(5).fill(null), [])
    return (
        <div className={'w-full'}>
            <Carousel opts={{align: 'start', loop: true }} className={'max-w-[90%] mx-auto'}>
                <CarouselContent>
                    {iterable.map((_: unknown, idx: number) => (
                        <CarouselItem key={idx} className={' md:basis-1/2 lg:basis-1/3 xl:basis-1/4'}>
                            <Skeleton className={'aspect-square'}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}