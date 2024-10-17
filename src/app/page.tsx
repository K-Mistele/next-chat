import {isMobile} from '@/lib/client-utils'
import {headers} from 'next/headers'
import Background from '@/components/background'

export default async function Home() {

    return (
        <div className={'h-dvh min-h-dvh relative bg-white'}>
            <Background className={'absolute w-dvw h-dvh'}/>
        </div>
    )
}