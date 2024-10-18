import {type CoreMessage, streamText, StreamData} from 'ai'
import {openai} from '@ai-sdk/openai'

export async function POST(request: Request) {

    const {messages}: {messages: CoreMessage[]} = await request.json()

    const data = new StreamData()
    // call data.append({...}) to add data to the stream
    // call data.appendMessageAnnotation to add to a message
    const result = await streamText({
        model: openai('gpt-4o-mini'),
        system: 'You are a helpful assistant',
        messages,
        onFinish: () => {
            data.close()
        }
    })

    return result.toDataStreamResponse({data})
}