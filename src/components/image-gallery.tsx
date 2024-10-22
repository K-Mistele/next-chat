'use client'
import {use, useMemo, useState} from 'react'
import Image from 'next/image'
import {Tooltip} from '@radix-ui/react-tooltip'
import {TooltipContent, TooltipTrigger} from '@/components/ui/tooltip'
import {cn} from '@/lib/utils'

export interface ImageInfo {
    url: string,
    alt: string
}
export interface ImageGalleryProps {
    images: Promise<Array<ImageInfo>>
    expand: boolean
}

export function ImageGallery({images}: ImageGalleryProps) {

    const imageData = use(images)
    const [showMoreImages, setShowMoreImages] = useState<boolean>(false)

    const selectedImages = useMemo(() => {

        return showMoreImages
             ? imageData
            : imageData.slice(0, 3)
    }, [images, showMoreImages])

    return (

        <div className={'w-full grid grid-cols-2 xl:grid-cols-4 gap-2'}>
            {selectedImages.map((selectedImage: ImageInfo, index: number) => (
                // TODO make clickable
                <div className={'w-full aspect-square relative rounded bg-muted-foreground'} key={index}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Image src={selectedImage.url} alt={selectedImage.url} fill={true} className={'object-cover'}/>
                        </TooltipTrigger>
                        <TooltipContent>
                            {selectedImage.alt}&nbsp;(Click for full image)
                        </TooltipContent>
                    </Tooltip>
                </div>
            ))}
            {!showMoreImages &&
                <div onClick={() => setShowMoreImages((s) => !s) }
                    className={cn(
                        'w-full aspect-square relative rounded bg-muted-foreground/30 flex flex-col items-center',
                        'justify-center text-center p-4 hover:underline cursor-pointer'
                    )}>
                    Click here to show {imageData.length - selectedImages.length} more images
                </div>
            }
        </div>
    )
}
