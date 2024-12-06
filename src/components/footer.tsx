'use client'
import {useState, useEffect} from 'react'

export function Footer() {

    const [key, setKey] = useState<string>('⌘')

    useEffect(() => {
        if (!window.navigator) return

    }, [])
    return (
        <div className={'z-10 sticky bottom-0 right-0 flex flex-col bg-background w-screen'}>
            <footer
                className={'w-full p-1 md:p-2 flex flex-col md:flex-row justify-between items-center z-10 backgroup-blur bg-background h-full'}>

                {/* Left Side*/}
                <div className={'text-md text-white'}>
                    Press {key}+k to start a new query
                </div>

                {/* Right side*/}
                <div className={'flex items-center space-x-1 text-sm text-muted-foreground h-full'}>
                    Built by Kyle Mistele //&nbsp;
                    <a href={'https://twitter.com/0xblacklight'} className={'underline cursor-pointer text-blue-500'}
                       target={'_blank'}>
                        0xblacklight
                    </a>
                    &nbsp;//&nbsp;
                    <a href={'https://github.com/K-mistele'} className={'underline cursor-pointer text-blue-500'}
                       target={'_blank'}>
                        GitHub
                    </a>

                </div>
            </footer>
        </div>
    )
}

