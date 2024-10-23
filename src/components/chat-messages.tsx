import type {Message} from 'ai'
import {useMemo} from 'react'
import {QuestionBlock, ConversationItem} from '@/components/question-block'

export interface ChatMessagesProps {
    messages: Array<Message>
    id: string
}

export function ChatMessages({messages, id}: ChatMessagesProps) {

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
        <div className={'px-8 sm:px-12 pb-14 md:pb-24 mx-auto flex flex-col space-y-3 md:space-y-4'}>
            {conversationItems.map((item: ConversationItem, idx: number) => (
                <QuestionBlock item={item} key={idx}/>
            ))}
        </div>
    )
}