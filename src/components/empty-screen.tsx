import {cn} from '@/lib/utils'
import {exampleMessages} from '@/lib/constants'
import {Button} from '@/components/ui/button'
import {ArrowRightIcon} from 'lucide-react'


export function EmptyScreen({
    submitMessage,
    className,
    visible
}: {
    submitMessage: (message: string) => void
    visible: boolean
    className?: string
}) {
    return (
    <div className={cn(
        className,
        visible ? 'visible' : 'invisible',
        'mx-auto w-full transition-all'
    )}>
        <div className={'p-2 mt-4 flex flex-col items-start space-y-2 mb-4'}>
            {exampleMessages.map((message: string, idx: number) => (
                <Button
                    key={idx}
                    variant={'link'}
                    className={'h-auto p-0 text-base'}
                    onClick={async () => submitMessage(message)}
                >
                    <ArrowRightIcon size={16} className={'mr-2 text-muted-foreground'}/>
                    {message}
                </Button>
            ))}
        </div>
    </div>
    )
}