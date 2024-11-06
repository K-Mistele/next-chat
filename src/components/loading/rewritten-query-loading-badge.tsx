import {Badge} from '@/components/ui/badge'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'

export function RewrittenQueryLoadingBadge() {

    return (
        <Badge className={'animate-pulse rounded-md bg-muted w-[200px]'}>
            <MagnifyingGlassIcon className={'size-4 stroke-white'}/>
        </Badge>
    )
}