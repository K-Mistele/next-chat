'use client'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import {InlineCode} from '@/components/inline-code'
import {CodeBlock} from '@/components/codeblock'
import {Separator} from '@/components/ui/separator'
import {cn} from '@/lib/utils'

import { FC, memo } from 'react'
import ReactMarkdown, { Options } from 'react-markdown'

const MemoizedReactMarkdown: FC<Options> = memo(
    ReactMarkdown,
    (prevProps, nextProps) =>
        prevProps.children === nextProps.children &&
        prevProps.className === nextProps.className
)

export interface EnhancedMarkdownProps {
    children: string | null | undefined
    className?: string
    name?: string
}

export function EnhancedMarkdown({children, className, name}: EnhancedMarkdownProps) {
    if (name) console.log(`Enhancedmarkdown (${name}) re-rendering`)
    return (
        <MemoizedReactMarkdown

            className={cn('prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0', className)}
            //remarkPlugins={[remarkGfm, remarkMath]}
            components={{
                p({children}) {
                    return <span className='mb-2 last:mb-0'>{children}</span>
                },
                code({node, className, children, ...props}) {
                    //console.log(`children:`, children)
                    //console.log(`includes newlines:`, )
                    //console.log(`className:`, className)

                    const inline = typeof children === 'string' ? !children.includes('\n') : false
                    //console.log(`code render`, children?.toString().substring(0, 20))

                    // @ts-expect-error reasons
                    if (children?.length) {
                        // @ts-expect-error reasons
                        if (children[0] == '▍') {
                            return (
                                <span className='mt-1 cursor-default animate-pulse'>▍</span>
                            )
                        }
                        // children[0] = (children[0] as string).replace('`▍`', '▍')
                    }

                    const match = /language-(\w+)/.exec(className || '')

                    // for single-line
                    if (inline) {
                        return (
                            <InlineCode>{children}</InlineCode>
                        )
                    }

                    // for code block
                    return (
                        <CodeBlock
                            key={((children|| '' )as string).slice(0, 10)}
                            language={(match && match[1]
                            ) || ''}
                            value={((children || '') as string).replace(/\n$/, '')}
                            className={'overflow-y-scroll'}
                            {...props}
                        />
                    )
                },
                h1: ({children}) => <><h1
                    className='text-2xl font-bold mb-2 mt-4'>{children}</h1></>,
                h2: ({children}) => <h2 className='text-xl font-bold mb-2 mt-4'>{children}</h2>,
                h3: ({children}) => <h3 className='text-lg font-bold mb-2 mt-4'>{children}</h3>,
                h4: ({children}) => <h4 className='text-base font-bold mb-2 mt-4'>{children}</h4>,
                hr: ({children}) => <Separator/>,
                ul: ({children}) => <ul className='list-disc pl-4 mb-2 [&>li]:mt-2'>{children}</ul>,
                li: ({children}) => <li className='mb-1'>{children}</li>,
                ol: ({children}) => <ol
                    className='list-decimal pl-4 mb-2 [&>li]:mt-2'>{children}</ol>,
            }}
        >
            {children}
        </MemoizedReactMarkdown>
    )
}