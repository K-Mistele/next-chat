'use client'

import {
    Select,
    SelectContent, SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import {ArrowRightIcon, TriangleIcon} from 'lucide-react'
import {type FormEvent, useEffect, useRef, useState} from 'react'
import Textarea from 'react-textarea-autosize'
import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {EmptyScreen} from '@/components/empty-screen'
import {useRouter} from 'next/navigation'
export function SearchForm() {

    // Create a ref for the input so that we can auto-focus on it once the page loads
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const [isComposing, setIsComposing] = useState(false)
    const [enterDisabled, setEnterDisabled] = useState(false)
    const [input, setInput] = useState('')
    const [source, setSource] = useState<string>('app')
    const [showEmptyScreen, setShowEmptyScreen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // focus on input when the page loads
        inputRef.current?.focus()
    }, [])

    const handleCompositionStart = () => setIsComposing(true);

    const handleCompositionEnd = () => {
        setIsComposing(false);
        setEnterDisabled(true);
        setTimeout(() => {
            setEnterDisabled(false);
        }, 300);
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await router.push(`/search?query=${input}&source=${source}`)
    }


    return (
        <form className={'max-w-2xl w-full px-6 space-y-2'} onSubmit={handleSubmit}>
            {/* Select whether we're using the app or pages router*/}
            <div className={'h-10 w-full flex items-center space-x-2'}>
                <Select defaultValue={'approuter'} name={'source'} value={source} onValueChange={setSource}>
                    <SelectTrigger className={'w-[180px] border-none focus:ring-2'}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={'app'}
                                    className={'bg-background hover:bg-background'}>
                            <div className={'flex flex-row items-center justify-start space-x-2'}>
                                <div
                                    className="w-8 h-8 rounded-md border flex items-center justify-center border-blue-400 bg-blue-100 bg-opacity-10 text-blue-700">
                                    <svg data-testid="geist-icon" height="16" strokeLinejoin="round"
                                         style={{width: '16px', height: '16px', color: 'currentcolor'}}
                                         viewBox="0 0 16 16" width="16">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                                              fill="currentcolor"></path>
                                    </svg>
                                </div>

                                <div>App Router</div>
                            </div>
                        </SelectItem>
                        <SelectItem value={'pages'}>
                            <div className={'flex flex-row items-center justify-start space-x-2'}>
                                <div
                                    className="w-8 h-8 rounded-md border flex items-center justify-center border-purple-400 bg-purple-100 bg-opacity-10 text-purple-700">
                                    <svg data-testid="geist-icon" height="16" strokeLinejoin="round"
                                         viewBox="0 0 16 16" width="16"
                                         style={{width: '16px', height: '16px', color: 'currentcolor'}}>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M14.5 6.5V13.5C14.5 14.8807 13.3807 16 12 16H4C2.61929 16 1.5 14.8807 1.5 13.5V1.5V0H3H8H9.08579C9.351 0 9.60536 0.105357 9.79289 0.292893L14.2071 4.70711C14.3946 4.89464 14.5 5.149 14.5 5.41421V6.5ZM13 6.5V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V1.5H8V5V6.5H9.5H13ZM9.5 2.12132V5H12.3787L9.5 2.12132Z"
                                              fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div>Pages Router</div>
                            </div>
                        </SelectItem>
                        <SelectItem value={'ai'}>
                            <div className={'flex flex-row items-center justify-start space-x-2'}>
                                <div>
                                    <TriangleIcon className={'w-8'}/>
                                </div>
                                <div>AI SDK</div>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Search bar*/}
            <div className={'relative flex items-center w-full'}>
                <Textarea
                    ref={inputRef}
                    name={'input'}
                    rows={1}
                    maxRows={5}
                    tabIndex={0}
                    onCompositionStart={handleCompositionStart}
                    onCompositionEnd={handleCompositionEnd}
                    placeholder={'Ask a question...'}
                    spellCheck={false}
                    value={input}
                    className="resize-none w-full min-h-12 rounded-fill bg-muted border border-input pl-4 pr-10 pt-3 pb-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'"
                    onChange={e => {
                        setInput(e.target.value)
                        setShowEmptyScreen(e.target.value.length === 0)
                    }}
                    onKeyDown={e => {
                        // Enter should submit the form, but disable it right after IME input confirmation
                        if (
                            e.key === 'Enter' &&
                            !e.shiftKey &&
                            !isComposing && // Not in composition
                            !enterDisabled // Not within the delay after confirmation
                        ) {
                            // Prevent the default action to avoid adding a new line
                            if (input.trim().length === 0) {
                                e.preventDefault()
                                return
                            }
                            e.preventDefault()
                            const textarea = e.target as HTMLTextAreaElement
                            textarea.form?.requestSubmit()
                        }
                    }}
                    onHeightChange={height => {
                        // Ensure inputRef.current is defined
                        if (!inputRef.current) return

                        // The initial height and left padding is 70px and 2rem
                        const initialHeight = 70
                        // The initial border radius is 32px
                        const initialBorder = 32
                        // The height is incremented by multiples of 20px
                        const multiple = (height - initialHeight) / 20

                        // Decrease the border radius by 4px for each 20px height increase
                        const newBorder = initialBorder - 4 * multiple
                        // The lowest border radius will be 8px
                        inputRef.current.style.borderRadius =
                            Math.max(8, newBorder) + 'px'
                    }}
                    onFocus={() => setShowEmptyScreen(true)}
                    onBlur={() => setShowEmptyScreen(false)}
                />
                <div className={'absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center'}>
                    <div className={'relative w-8 h-8 flex items-center justify-enx'}>
                        <Button className={cn(
                            input.length ? 'visible' : 'invisible',
                        )} type={'submit'} size={'icon'} variant={'ghost'}>
                            <ArrowRightIcon className={''}/>
                        </Button>
                    </div>
                </div>
            </div>

            <EmptyScreen submitMessage={(message: string) => setInput(message)} visible={showEmptyScreen}/>
        </form>
    )
}