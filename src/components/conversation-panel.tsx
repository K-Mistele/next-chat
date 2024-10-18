'use client'

import {MessageCircleQuestionIcon} from 'lucide-react'
import {useChat} from 'ai/react'
import {generateId} from 'ai'
import {ChatMessages} from '@/components/chat-messages'

export interface ConversationPanelProps {
    id: string
    query: string
}

const messages = [
    'Hello! How can I assist you today? If you have any questions or need information on a specific topic, feel free to ask!'
]

const related = [
    'What are the key differences between the two?',
    'Can you explain more simply?',
    'Can you help me configure tailwind?'
]


export function ConversationPanel({id, query}: ConversationPanelProps) {

    const {
        messages,
        input,
        setInput,
        append
    } = useChat({
        id: id,
        initialMessages: [{role: 'user', content: query, id: generateId()}]
    })

    return (
        <div className={'flex flex-col space-y-2'}>
            <ChatMessages messages={messages} id={id}/>
        </div>
    )
}