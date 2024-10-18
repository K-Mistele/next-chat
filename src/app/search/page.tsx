import {redirect} from 'next/navigation'
import {ConversationPanel} from '@/components/conversation-panel'
import {generateId} from 'ai'

export default async function SearchPage({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined}>
}) {

    const queryParams = await searchParams
    if (!queryParams.query) return redirect(`/`)

    const messages = [
        'Hello! How can I assist you today? If you have any questions or need information on a specific topic, feel free to ask!'
    ]

    const related = [
        'What are the key differences between the two?',
        'Can you explain more simply?',
        'Can you help me configure tailwind?'
    ]

    const id = generateId()

    return (
        // Container
        <div>
            <div className={'px-8 sm:px-12 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4'}>
                <ConversationPanel id={id} query={queryParams.query as string}/>
            </div>
        </div>
    )
}