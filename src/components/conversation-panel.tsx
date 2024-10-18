'use client'

import {MessageCircleQuestionIcon} from 'lucide-react'

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


    return (
        <>
            {/* Show the question*/}
            <div className={'flex items-center justify-start w-full space-x-2 mt-2 min-h-10'}>
                <MessageCircleQuestionIcon className={'size-6'}/>
                <div className={'text-xl flex-1 break-words w-full line-clamp-2'}>{query}</div>
            </div>
        </>
    )
}