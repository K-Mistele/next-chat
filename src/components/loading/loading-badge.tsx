import {Badge} from '@/components/ui/badge'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'
import {cn} from '@/lib/utils'
import type {ReactElement} from 'react'


export interface LoadingBadgeProps {
    className?: string
    children?: ReactElement
}
export function LoadingBadge({className, children}: LoadingBadgeProps) {

    return (
        <Badge className={cn('animate-pulse rounded-md bg-muted', className)}>
            {children}
        </Badge>
    )
}