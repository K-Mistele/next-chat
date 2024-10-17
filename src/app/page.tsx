import {isMobile} from '@/lib/client-utils'
import {headers} from 'next/headers'
import DesktopBackground from '@/components/desktop-background'

export default async function Home() {

    const desktop = !isMobile((await headers()).get('User-Agent') || '')
    return (
        <div className={'h-dvh min-h-dvh bg-black relative'}>

            {desktop ? <DesktopBackground/> : <></>}
        </div>
    )
}