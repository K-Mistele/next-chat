import {redirect} from 'next/navigation'
import {ConversationPanel} from '@/components/conversation-panel'
import {generateId, type Message} from 'ai'
import {type PageProps} from '@/lib/types'

export async function generateMetadata({searchParams}: PageProps) {
    const {query} = await searchParams
    if (!query) return {
        title: 'Chat with Next.js docs'
    }
    else return {
        title: `Ask Next.js: ${query}`
    }
}

export default async function SearchPage({searchParams}: PageProps) {

    const queryParams = await searchParams
    if (!queryParams.query) return redirect(`/`)

    const id = generateId()

    // TODO this should be a DB lookup
    const existingMessages: Promise<Array<Message>> = Promise.resolve([] satisfies Array<Message>)

    return (
        // Container
        <div>
            <div className={'px-8 sm:px-12 pb-14 md:pb-24 max-w-[80%] mx-auto flex flex-col space-y-3 md:space-y-4'}>

                {/* TODO streaming suspense*/}
                <ConversationPanel id={id} query={queryParams.query as string} existingMessages={existingMessages}/>
            </div>
        </div>
    )
}