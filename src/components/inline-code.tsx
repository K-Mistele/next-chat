import {sourceCodeFont} from '@/lib/fonts'
import {ReactNode, memo} from 'react'

import {cn} from '@/lib/utils'

export interface InlineCodeProps {
    className?: string
    children: ReactNode
}
export const InlineCode = memo(function InlineCode({className, children, ...props}: InlineCodeProps){

    return <code
        className={cn(
            className,
            'px-1 py-0.5 h-fit font-mono font-normal inline-block whitespace-nowrap text-default-foreground text-inherit'
        )}
        style={{backgroundColor: 'rgba(63, 63, 70, 0.4)', ...sourceCodeFont.style}}>
        {children}
    </code>
}, (prevProps, nextProps) => (prevProps.children as string).length === (nextProps.children as string).length)