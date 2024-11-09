import {memo} from 'react'
import {ChevronsUpDownIcon, NewspaperIcon} from 'lucide-react'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'
import {Button} from '@/components/ui/button'
import {SourcesListCarousel} from '@/components/sources-list-carousel'
import {SourcesListLoading} from '@/components/loading/sources-list-loading'
import type {Source} from '@/lib/ai/types'

export interface QuerySourcesListProps {
    sources: Array<Source> | null | undefined,
}

export const QuerySourcesList = memo(function QuerySourcesList(
    {sources}: QuerySourcesListProps
) {
    console.log(`QuerySourcesList re-rendered`)
    return (
        <>
            <div className={'flex flex-row w-full items-center justify-between'}>
                <h2 className={'flex items-center leading-none pt-2 pb-4'}>
                    <NewspaperIcon className={'size-6 mr-2'}/>
                    Sources
                </h2>
                <CollapsibleTrigger className={'flex flex-row justify-between'} asChild>

                    <Button className={''} variant={'ghost'} size={'sm'}>
                        <ChevronsUpDownIcon className={'size-4'}/>
                    </Button>
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
                {
                    sources && sources.length
                        ? <SourcesListCarousel sources={sources}/>
                        : <SourcesListLoading/>
                }
            </CollapsibleContent>
        </>
    )
},
    (prevProps: QuerySourcesListProps, nextProps: QuerySourcesListProps) => prevProps.sources?.length === nextProps.sources?.length
    )