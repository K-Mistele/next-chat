import {Header} from '@/components/header'
import {Search} from '@/components/search'
import {Footer} from '@/components/footer'

export default async function Home() {

    return (
        <div className={'min-h-dvh relative'}>
            <div>
                <div className={'px-8 sm:px-12 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4'}>
                    <div className={'fixed bottom-8 left-0 right-0 top-2 mx-auto h-screen flex flex-col items-center justify-center'}>
                        <Search/>
                    </div>
                </div>
            </div>
        </div>
    )
}