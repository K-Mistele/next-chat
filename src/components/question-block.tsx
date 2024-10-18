'use client'

import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'
import {Button} from '@/components/ui/button'
import type {Message} from 'ai'
import {useState} from 'react'
import {ChevronsUpDown} from 'lucide-react'

export interface ConversationItem {
    question: Message
    answer: Message | null
}

export interface QuestionBlockProps {
    item: ConversationItem
}

// TODO
const messages = [
    'Hello! How can I assist you today? If you have any questions or need information on a specific topic, feel free to ask!'
]

const related = [
    'What are the key differences between the two?',
    'Can you explain more simply?',
    'Can you help me configure tailwind?'
]

export function QuestionBlock({item}: QuestionBlockProps) {

    const [isOpen, setIsOpen] = useState<boolean>(true)

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
            <CollapsibleContent>
                {item.answer?.content}
            </CollapsibleContent>
        </Collapsible>
    )
}