import {CoreUserMessage, TextPart} from 'ai'

export function getMessageTextContent(message: CoreUserMessage): string {
    let userQuery: string;
    if (typeof message.content === 'string') {
        userQuery = message.content
    }
    else {
        // Otherwise we are looking at a multipart message
        const [textMessage] = message.content.filter(m => m.type === 'text')
        userQuery = textMessage.text
    }
    return userQuery
}