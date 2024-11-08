'use client'

import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'
import {Button} from '@/components/ui/button'
import type {Message} from 'ai'
import {useState, Suspense, useMemo} from 'react'
import {
    BookCheckIcon,
    ChevronsUpDown,
    ChevronsUpDownIcon,
    ImagesIcon,
    KeySquareIcon,
    NewspaperIcon
} from 'lucide-react'
import {Badge} from '@/components/ui/badge'
import {MagnifyingGlassIcon} from '@radix-ui/react-icons'
import {ErrorBoundary} from 'react-error-boundary'
import {ImageGallery} from '@/components/image-gallery'
import {ImageGalleryLoading} from '@/components/loading/image-gallery-loading'
import {Source, SourcesListCarousel} from '@/components/sources-list'
import {SourcesListLoading} from '@/components/loading/sources-list-loading'
import {EnhancedMarkdown} from '@/components/enhanced-markdown'
import type {DataStreamMessage} from '@/lib/ai/types'
import {LoadingBadge} from '@/components/loading/loading-badge'

export interface ConversationItem {
    question: Message
    answer: Message | null
}

export interface QuestionBlockProps {
    item: ConversationItem
}

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

    console.log(`question block render`)

    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [sourcesIsOpen, setSourcesIsOpen] = useState<boolean>(true)
    const sourcesMockPromise = useMemo(() => Promise.resolve(mockSources), [])


    // Extract rewritten query
    const rewrittenQuery = useMemo<string | null>(() => {

        if (!item?.answer?.annotations) return null
        const annotations = item.answer.annotations as Array<DataStreamMessage>

        const annotation = annotations.find((annotation: DataStreamMessage) => annotation.type === 'rewrittenQuery')
        return annotation
            ? annotation.query
            : null

    }, [item.answer?.annotations, item?.answer?.annotations?.length])

    const keywords: Array<string> = useMemo<Array<string>>(() => {

        const keywords: Array<string> = []
        if (!item?.answer?.annotations) return keywords
        const annotations = item.answer.annotations as Array<DataStreamMessage>
        const keywordsAnnotation = annotations.find((annotation: DataStreamMessage) => annotation.type === 'extractedKeywords')
        if (keywordsAnnotation) keywords.push(...keywordsAnnotation.keywords)
        return keywords

    }, [item.answer?.annotations, item?.answer?.annotations?.length])

    const imagesData = useMemo<Array<{ url: string, alt: string }> | null>(() => {
        let images = null;
        if (!item?.answer?.annotations) return images
        const annotations = item.answer.annotations as Array<DataStreamMessage>
        const imagesAnnotation = annotations.find((annotation: DataStreamMessage) => annotation.type === 'relatedImages')
        if (imagesAnnotation) images = imagesAnnotation.imageData
        return images;

    }, [item.answer?.annotations, item?.answer?.annotations?.length])

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
                <section id={'query-details'} className={'flex flex-col gap-y-2 pt-2 pb-0 w-full'}>
                    {
                        rewrittenQuery
                            ? (
                                <Badge variant={'secondary'} className={'focus:ring-0 w-fit'}>
                                    <MagnifyingGlassIcon className={'size-4'}/>
                                    <span className={'ml-1'}>{rewrittenQuery}</span>
                                </Badge>
                            )
                            : (
                                <LoadingBadge className={'w-[250px]'}>
                                    <MagnifyingGlassIcon className={'size-4 stroke-white'}/>
                                </LoadingBadge>
                            )
                    }
                    {
                        keywords.length
                            ? (
                                <Badge variant={'secondary'} className={'focus:ring-0 w-fit'}>
                                    <KeySquareIcon className={'size-4'}/>
                                    <span className={'ml-1'}>{keywords.join(', ')}</span>
                                </Badge>
                            )
                            : (
                                <LoadingBadge className={'w-[250px]'}>
                                    <KeySquareIcon className={'size-4 stroke-white'}/>
                                </LoadingBadge>
                            )

                    }

                </section>

                <div className={'w-full flex flex-col lg:grid grid-cols-12 gap-8'}>
                    <div className={'col-span-8 flex flex-col gap-y-2 pb-1'}>
                        {/* Section: sources*/}
                        <section id={'sources'} className={'pt-2 w-full'}>
                            <Collapsible open={sourcesIsOpen} onOpenChange={setSourcesIsOpen}>
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
                                    <ErrorBoundary fallback={<SourcesListLoading/>}>
                                        <Suspense fallback={<SourcesListLoading/>}>
                                            <SourcesListCarousel sources={sourcesMockPromise}/>
                                        </Suspense>
                                    </ErrorBoundary>
                                </CollapsibleContent>
                            </Collapsible>
                        </section>

                        {/* answer*/}
                        <section id={'answer'} className={'pt-2'}>
                            <h2 className={'flex items-center leading-none pt-2 pb-4'}>
                                <BookCheckIcon className={'size-6 mr-2'}/>
                                Answer
                            </h2>
                            {/*<Separator className={'mt-2 mb-4'}/>*/}

                            {/* Load the content OR a loading state*/}
                            {
                                item.answer?.content.length
                                    ? <EnhancedMarkdown>{item.answer?.content}</EnhancedMarkdown>
                                    : <></>
                            }

                        </section>
                    </div>
                    <div className={'order-first lg:order-last col-span-4 flex flex-col'}>
                        {/* Section: images*/}
                        <section id={'images'} className={'pt-2 pb-0 w-full'}>

                            <div className={'flex flex-row justify-between items-center'}>
                                <h2 className={'flex items-center leading-none pt-2 pb-4'}>
                                    <ImagesIcon className={'size-6 mr-2'}/>
                                    Images
                                </h2>
                            </div>

                            {/* TODO list - show 3, plus fourth option to click and show 5 - replace, plus new row*/}
                            {
                                imagesData
                                    ? <ImageGallery images={imagesData}/>
                                    : <ImageGalleryLoading/>
                            }

                        </section>
                    </div>
                </div>


            </CollapsibleContent>
        </Collapsible>
    )

}