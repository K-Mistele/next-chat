import {Badge} from '@/components/ui/badge'
import {cn} from '@/lib/utils'
import type {ReactElement} from 'react'


export interface LoadingBadgeProps {
    className?: string
    children?: ReactElement
}
export function LoadingBadge({className, children}: LoadingBadgeProps) {

    return (
        <Badge className={cn('animate-pulse bg-muted', className)}>
            {children}
        </Badge>
    )
}