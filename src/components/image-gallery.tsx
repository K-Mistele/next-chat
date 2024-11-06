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
    images: Array<ImageInfo>
}

export function ImageGallery({images}: ImageGalleryProps) {

    const [showMoreImages, setShowMoreImages] = useState<boolean>(false)

    const selectedImages = useMemo(() => {

        return showMoreImages
            ? images
            : images.slice(0, 3)
    }, [images, showMoreImages])

    return (

        <div className={'w-full grid grid-cols-2 gap-4'}>
            {selectedImages.map((selectedImage: ImageInfo, index: number) => (
                // TODO make clickable
                <Tooltip key={index}>

                    <div className={cn(
                        'w-full aspect-square relative overflow-clip border-2 border-foreground/20 rounded-xl',
                        'shadow-md transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg'
                    )} key={index}>
                        <TooltipTrigger>
                            <Image src={selectedImage.url} alt={selectedImage.url} fill={true}
                                   className={'object-cover'}/>
                        </TooltipTrigger>

                    </div>
                    <TooltipContent>
                        {selectedImage.alt}&nbsp;(Click for full image)
                    </TooltipContent>
                </Tooltip>

            ))}
            {!showMoreImages &&
                <div onClick={() => setShowMoreImages((s) => !s)}
                     className={cn(
                         'w-full aspect-square relative rounded bg-muted-foreground/10 flex flex-col items-center',
                         'justify-center text-center p-4 hover:underline cursor-pointer border-2 border-foreground/20 ',
                         'rounded-xl text-md lg:text-sm',
                         'shadow-md transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg'
                     )}>
                    Click to show {images.length - selectedImages.length} more
                </div>
            }
        </div>
    )
}
