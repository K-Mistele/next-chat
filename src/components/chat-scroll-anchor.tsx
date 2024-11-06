'use client'
import {useAtBottom} from '@/lib/hooks/use-at-bottom'
import {LegacyRef, forwardRef, useEffect, useRef} from 'react'

interface ChatScrollAnchorProps {
    trackVisibility?: boolean
}

interface AnchorProps {}
const anchor = (props: AnchorProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return <div ref={ref} className='h-px w-full' />
}

const Anchor = forwardRef(anchor)
export function ChatScrollAnchor({ trackVisibility }: ChatScrollAnchorProps) {
    const {isAtBottom, observer, ref} = useAtBottom()
    const scrollTarget = useRef()

    useEffect(() => {
        if (!isAtBottom) {
            //console.log(`observer is out of view`)
            observer?.target.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        } else {
            console.log(`observer is in view`)
        }
    }, [isAtBottom, observer, trackVisibility])

    const scrollToTarget = (event: any) => {
        event.preventDefault()
        // @ts-expect-error it works tho
        scrollTarget?.current?.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    return (<>
            {/*<ButtonScrollToBottom isAtBottom={isAtBottom} scrollIntoView={scrollToTarget}/>*/}
            <div ref={ref} className={'h-px w-full'}/>
            {/*@ts-expect-error it works tho*/}
            <Anchor ref={scrollTarget}/>
        </>
    )
}