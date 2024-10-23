'use client'

import {useChat} from 'ai/react'
import type {Message} from 'ai'
import {generateId} from 'ai'
import {ChatMessages} from '@/components/chat-messages'
import {useEffect, use} from 'react'

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
        input,
        setInput,
        append
    } = useChat({
        id: id,
        initialMessages: initialMessages,
        api: `/api/chat`
    })

    useEffect(() => {
        if (!initialMessages.length) append({role: 'user', content: query, id: generateId()})
    }, [])

    return (
        <div>
            <ChatMessages messages={messages} id={id}/>

            {/* TODO Chat window */}
        </div>
    )
}