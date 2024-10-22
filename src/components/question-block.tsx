'use client'

import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'
import {Button} from '@/components/ui/button'
import type {Message} from 'ai'
import {useState, Suspense, useMemo} from 'react'
import {BookCheckIcon, ChevronsUpDown, ImagesIcon, NewspaperIcon} from 'lucide-react'
import {Badge} from '@/components/ui/badge'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'
import {ErrorBoundary} from 'react-error-boundary'
import {ImageGallery} from '@/components/image-gallery'
import {ImageGalleryLoading} from '@/components/loading/image-gallery-loading'

export interface ConversationItem {
    question: Message
    answer: Message | null
}

export interface QuestionBlockProps {
    item: ConversationItem
}

const mockMessages = [
    'Hello! How can I assist you today? If you have any questions or need information on a specific topic, feel free to ask!'
]

const mockRelated = [
    'What are the key differences between the two?',
    'Can you explain more simply?',
    'Can you help me configure tailwind?'
]

const mockImageUrls = [
    {url: '/next-docs/next-conditional-route.png', alt: 'Conditional routes diagram'},
    {url: '/next-docs/next-intercepting-photo.png', alt: 'Intercepting routes folder structure'},
    {url: '/next-docs/next-intercepting-routes.png', alt: 'Intercepting routes soft navigation'},
    {url: '/next-docs/next-interception.png', alt: 'Intercepting routes modal example'},
    {url: '/next-docs/next-parallel-routes.png', alt: 'Parallel routes diagram'},
    {url: '/next-docs/next-tab-groups.png', alt: 'Tab groups example'}
]


export function QuestionBlock({item}: QuestionBlockProps) {

    const [isOpen, setIsOpen] = useState<boolean>(true)
    const imagesPromise = useMemo(() => Promise.resolve(mockImageUrls), [])


    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild className={'w-full'}>
                <div className={'flex flex-row '}>
                    <div
                        className={'w-full text-xl flex flex-row items-center justify-start break-words line-clamp-2'}>
                        {item.question.content}
                    </div>
                    <Button variant="ghost" size="sm" className="">
                        <ChevronsUpDown className="h-4 w-4"/>
                    </Button>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent className={'flex flex-col items-start justify-start gap-y-2 pb-1'}>
                {/*    Section: rewritten query*/}
                <section id={'query'} className={'pt-2 pb-0 w-full'}>
                    <Badge variant={'secondary'} className={'focus:ring-0'}>
                        <MagnifyingGlassIcon className={'size-4'}/>
                        <span className={'ml-1'}>Next.js dynamic route segments (rewritten)</span>
                    </Badge>
                </section>

                {/* Section: sources*/}
                <section id={'images'} className={'pt-2 pb-0 w-full'}>
                    <h2 className={'flex items-center leading-none py-2'}>
                        <ImagesIcon className={'size-6 mr-2'}/>
                        Images
                    </h2>
                    {/* TODO list - show 3, plus fourth option to click and show 5 - replace, plus new row*/}
                    <ErrorBoundary fallback={<></>}>
                        <Suspense fallback={<ImageGalleryLoading/>}>
                            <ImageGallery images={imagesPromise} />
                        </Suspense>
                    </ErrorBoundary>
                </section>

                {/* Section: sources*/}
                <section id={'sources'} className={'pt-2 w-full'}>
                    <h2 className={'flex items-center leading-none py-2'}>
                        <NewspaperIcon className={'size-6 mr-2'}/>
                        Sources
                    </h2>

                </section>

                {/* answer*/}
                <section id={'answer'} className={'pt-2'}>
                    <h2 className={'flex items-center leading-none py-2'}>
                        <BookCheckIcon className={'size-6 mr-2'}/>
                        Answer
                    </h2>

                    {/* TODO react markdown rendering*/}
                </section>
            </CollapsibleContent>
        </Collapsible>
    )
}