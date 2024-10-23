import {Skeleton} from '@/components/ui/skeleton'

export function ImageGalleryLoading() {
    return (
        <div className={'w-full grid grid-cols-2 gap-2'}>
            <Skeleton className={'w-full aspect-square'}/>
            <Skeleton className={'w-full aspect-square'}/>
            <Skeleton className={'w-full aspect-square'}/>
            <Skeleton className={'w-full aspect-square'}/>
        </div>
    )
}