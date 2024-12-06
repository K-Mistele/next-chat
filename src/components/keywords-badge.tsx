import {Badge} from '@/components/ui/badge'
import {KeySquareIcon} from 'lucide-react'
import {LoadingBadge} from '@/components/loading/loading-badge'
import {memo} from 'react'


export interface KeywordsBadgeProps {
    keywords: Array<string> | undefined
}

export const KeywordsBadge = memo(function KeywordsBadge(
    {keywords}: KeywordsBadgeProps
) {
    console.log(`KeywordsBadge re-rendered`)
    return (
        <>
            {

                keywords?.length
                    ? (
                        <Badge variant={'secondary'} className={'focus:ring-0 w-fit'}>
                            <KeySquareIcon className={'size-6'}/>
                            <span className={'ml-1 text-sm'}>{keywords.join(', ')}</span>
                        </Badge>
                    )
                    : (
                        <LoadingBadge className={'w-[250px]'}>
                            <KeySquareIcon className={'size-6 stroke-white'}/>
                        </LoadingBadge>
                    )

            }
        </>
    )
}, (prevProps: KeywordsBadgeProps, nextProps: KeywordsBadgeProps) => {

    // this is a good heuristic for our application; could JSON-strinify but that's more expensive, and
    // once keywords are generated they won't change...
    return prevProps.keywords?.length === nextProps.keywords?.length
})