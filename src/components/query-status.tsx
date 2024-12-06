'use client'
import {memo} from 'react'
import {Badge} from '@/components/ui/badge'
import {CheckIcon, LoaderCircleIcon} from 'lucide-react'

export interface QueryStatusProps {
    finishSignalReceived: boolean
    status: string | undefined
}
export const QueryStatus = memo(function QueryStatus({
    finishSignalReceived,
    status
}: QueryStatusProps) {

    console.log(`Query status updated!`)

    return (
        <>
            {
                finishSignalReceived
                    ? (
                        <Badge variant={'outline'}
                               className={'flex flex-row gap-2 w-fit border-2 font-sans text-sm'}>
                            <CheckIcon className={'size-8 stroke-green-600'}/>
                            Query Completed
                        </Badge>
                    )
                    : (
                        <Badge variant={'outline'}
                               className={'flex flex-row gap-2 w-fit border-2 font-sans text-sm'}>
                            <LoaderCircleIcon className={'size-8 stroke-white animate-spin'}/>
                            {status}
                        </Badge>
                    )
            }
            </>
    )
})

