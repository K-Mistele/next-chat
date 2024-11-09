'use client'

import {useChat} from 'ai/react'
import {generateId} from 'ai'
import {useEffect, use} from 'react'
import type {JSONValue, Message} from 'ai'
import {useMemo} from 'react'
import {QuestionBlock, ConversationItem} from '@/components/question-block'

export interface ConversationPanelProps {
    id: string
    query: string
    existingMessages: Promise<Array<Message>>
}

export function ConversationPanel({id, query, existingMessages}: ConversationPanelProps) {

    const initialMessages = use(existingMessages)
    // TODO initial messages should be looked up in parent RSC, and populated. if not
    const {
        messages,
        data,
        input,
        setInput,
        append
    } = useChat({
        id: id,
        initialMessages: initialMessages,
        api: `/api/chat`
    })

    //  Set query to first user maesage
    useEffect(() => {
        if (!initialMessages.length) append({role: 'user', content: query, id: generateId()})
    }, [])

    // Group the messages in the conversation into a question and an answer, used for rendering
    //  blocks of the question and it's answer, sources, images, etc
    const conversationItems: Array<ConversationItem> = useMemo(() => {
        const groupedMessages: Array<ConversationItem> = [];

        for (let i = 0; i < messages.length; i += 2) {
            // Check that the current role is 'user' and the next one is 'assistant'
            if (messages[i] && messages[i].role === 'user') {
                groupedMessages.push({
                    question: messages[i], // Adjust 'message' to your actual property name for the content
                    answer: messages[i + 1] ? messages[i + 1] : null, // Get the assistant message, if it exists
                });
            }
        }

        return groupedMessages;
    }, [messages])

    return (
        <div>
            <div className={'px-8 sm:px-12 pb-14 md:pb-24 mx-auto flex flex-col space-y-3 md:space-y-4 w-full'}>
                {conversationItems.map((item: ConversationItem, idx: number) => (
                    <QuestionBlock item={item} key={idx} data={data}/>
                ))}
            </div>

            {/* TODO Chat window */}
        </div>
    )
}