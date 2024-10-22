import Image from 'next/image'

export interface ImageCardProps {
    url: string
}

export function ImageCard({url}: ImageCardProps) {

    return (
        <div className={'w-full relative'}>
            <Image src={url} alt={''} fill={true} className={'object-contain'}/>
        </div>
    )
}