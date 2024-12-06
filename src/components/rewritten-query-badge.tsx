import {memo} from 'react'
import {Badge} from '@/components/ui/badge'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'
import {LoadingBadge} from '@/components/loading/loading-badge'

export interface RewrittenQueryBadgeProps {
    rewrittenQuery: string | undefined
}
export const RewrittenQueryBadge = memo(function RewrittenQueryBadge(
    {rewrittenQuery}: RewrittenQueryBadgeProps
) {
    console.log(`RewrittenQueryBadge re-rendered`)
    return (
        <>
            {
                rewrittenQuery
                    ? (
                        <Badge variant={'secondary'} className={'focus:ring-0 w-fit'}>
                            <MagnifyingGlassIcon className={'size-6'}/>
                            <span className={'ml-1 text-sm'}>{rewrittenQuery}</span>
                        </Badge>
                    )
                    : (
                        <LoadingBadge className={'w-[250px]'}>
                            <MagnifyingGlassIcon className={'size-6 stroke-white'}/>
                        </LoadingBadge>
                    )
            }
        </>
    )
})