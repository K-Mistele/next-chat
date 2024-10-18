import {BotMessageSquareIcon} from 'lucide-react'
import {Label} from '@/components/ui/label'
import {SearchForm} from '@/components/search-form'

export function Search (){

    return (
        <>
            {/* Header Content*/}
            <div className={'flex flex-col items-center justify-center p-8 space-y-4'}>
                <BotMessageSquareIcon className={'size-12'}/>
                <div className={'flex flex-col items-center justify-center space-y-2'}>
                    <Label className={'text-2xl md:text-3xl font-semibold text-center'}>
                        Chat with Next.js Docs
                    </Label>
                    <Label className={'text-sm text-muted-foreground text-center'}>
                        Wish Vercel shipped this already? Me too. So I did.
                    </Label>
                </div>
            </div>

            <SearchForm/>

        </>
    )
}