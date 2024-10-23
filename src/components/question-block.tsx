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
import {Source, SourcesListCarousel} from '@/components/sources-list'
import {SourcesListLoading} from '@/components/loading/sources-list-loading'
import {EnhancedMarkdown} from '@/components/enhanced-markdown'

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

const mockImageUrls: Array<{ url: string, alt: string }> = [
    {url: '/next-docs/next-conditional-route.png', alt: 'Conditional routes diagram'},
    {url: '/next-docs/next-intercepting-photo.png', alt: 'Intercepting routes folder structure'},
    {url: '/next-docs/next-intercepting-routes.png', alt: 'Intercepting routes soft navigation'},
    {url: '/next-docs/next-interception.png', alt: 'Intercepting routes modal example'},
    {url: '/next-docs/next-parallel-routes.png', alt: 'Parallel routes diagram'},
    {url: '/next-docs/next-tab-groups.png', alt: 'Tab groups example'}
]

const mockSources: Array<Source> = [
    {
        text: 'You intentionally cannot access the raw request object. However, you can access `headers` and `cookies` through server-only functions. You can also set cookies.',
        icon: 'https://nextjs.org/favicon.ico',
        link: 'https://nextjs.org/docs/app',
        title: 'Introduction: App Router | Next.js'
    },
    {
        text: 'Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout. They are useful for highly dynamic sections of an app, such as dashboards and feeds on social sites. For example, considering a dashboard, you can use parallel routes to simultaneously render the `team` and `analytics` pages:',
        icon: 'https://nextjs.org/favicon.ico',
        link: 'https://nextjs.org/docs/app/building-your-application/routing/parallel-routes',
        title: 'Routing: Parallel Routes | Next.js'
    },
    {
        text: 'However, slots are not route segments and do not affect the URL structure. For example, for `/@analytics/views`, the URL will be `/views` since `@analytics` is a slot. Slots are combined with the regular Page component to form the final page associated with the route segment. Because of this, you cannot have separate static and dynamic slots at the same route segment level. If one slot is dynamic, all slots at that level must be dynamic.',
        icon: 'https://nextjs.org/favicon.ico',
        link: 'https://nextjs.org/docs/app/building-your-application/routing/parallel-routes',
        title: 'Routing: Parallel Routes | Next.js'
    },
    {
        text: 'Parallel Routes can be used together with Intercepting Routes to create modals that support deep linking. This allows you to solve common challenges when building modals, such as:\n- Making the modal content shareable through a URL.\n- Preserving context when the page is refreshed, instead of closing the modal.\n- Closing the modal on backwards navigation rather than going to the previous route.\n- Reopening the modal on forwards navigation.',
        icon: 'https://nextjs.org/favicon.ico',
        link: 'https://nextjs.org/docs/app/building-your-application/routing/parallel-routes',
        title: 'Routing: Parallel Routes | Next.js'

    },
    {
        text: 'Intercepting routes allows you to load a route from another part of your application within the current layout. This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context.\nFor example, when clicking on a photo in a feed, you can display the photo in a modal, overlaying the feed. In this case, Next.js intercepts the `/photo/123` route, masks the URL, and overlays it over `/feed.`',
        icon: 'https://nextjs.org/favicon.ico',
        link: 'https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes',
        title: 'Routing: Intercepting Routes | Next.js'
    },
    {
        text: 'The naming of route groups has no special significance other than for organization. They do not affect the URL path.\nRoutes that include a route group should not resolve to the same URL path as other routes. For example, since route groups don\'t affect URL structure, `(marketing)/about/page.js` and `(shop)/about/page.js` would both resolve to /about and cause an error.',
        icon: 'https://nextjs.org/favicon.ico',
        link: 'https://nextjs.org/docs/app/building-your-application/routing/route-groups',
        title: 'Routing: Route Groups | Next.js'
    }
]

export function QuestionBlock({item}: QuestionBlockProps) {

    const [isOpen, setIsOpen] = useState<boolean>(true)
    const imagesMockPromise = useMemo(() => Promise.resolve(mockImageUrls), [])
    const sourcesMockPromise = useMemo(() => Promise.resolve(mockSources), [])


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
            <CollapsibleContent className={'flex flex-col gap-y-2'}>

                {/*    Section: rewritten query*/}
                <section id={'query'} className={'pt-2 pb-0 w-full'}>
                    <Badge variant={'secondary'} className={'focus:ring-0'}>
                        <MagnifyingGlassIcon className={'size-4'}/>
                        <span className={'ml-1'}>Next.js dynamic route segments (rewritten)</span>
                    </Badge>
                </section>

                <div className={'w-full flex flex-col lg:grid grid-cols-12 gap-8'}>
                    <div className={'col-span-8 flex flex-col gap-y-2 pb-1'}>
                        {/* Section: sources*/}
                        <section id={'sources'} className={'pt-2 w-full'}>
                            <h2 className={'flex items-center leading-none py-2'}>
                                <NewspaperIcon className={'size-6 mr-2'}/>
                                Sources
                            </h2>
                            <ErrorBoundary fallback={<SourcesListLoading/>}>
                                <Suspense fallback={<SourcesListLoading/>}>
                                    <SourcesListCarousel sources={sourcesMockPromise}/>
                                </Suspense>
                            </ErrorBoundary>

                        </section>

                        {/* answer*/}
                        <section id={'answer'} className={'pt-2'}>
                            <h2 className={'flex items-center leading-none py-2'}>
                                <BookCheckIcon className={'size-6 mr-2'}/>
                                Answer
                            </h2>

                            {/* TODO react markdown rendering*/}
                            <EnhancedMarkdown>{item.answer?.content}</EnhancedMarkdown>
                        </section>
                    </div>
                    <div className={'order-first lg:order-last col-span-4 flex flex-col'}>
                        {/* Section: images*/}
                        <section id={'images'} className={'pt-2 pb-0 w-full'}>

                            <div className={'flex flex-row justify-between items-center'}>
                                <h2 className={'flex items-center leading-none py-2'}>
                                    <ImagesIcon className={'size-6 mr-2'}/>
                                    Images
                                </h2>
                            </div>

                            {/* TODO list - show 3, plus fourth option to click and show 5 - replace, plus new row*/}
                            <ErrorBoundary fallback={<ImageGalleryLoading/>}>
                                <Suspense fallback={<ImageGalleryLoading/>}>
                                    <ImageGallery images={imagesMockPromise}/>
                                </Suspense>
                            </ErrorBoundary>
                        </section>
                    </div>
                </div>


            </CollapsibleContent>
        </Collapsible>
    )
}