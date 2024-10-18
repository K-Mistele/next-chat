export function Footer() {

    return (
        <div className={'z-10 absolute bottom-0 flex flex-col w-full'}>
            <footer
                className={'w-full p-1 md:p-2 flex flex-col md:flex-row justify-between items-center z-10 backgroup-blur bg-background/80'}>

                {/* Left Side*/}
                <div className={'text-sm text-muted-foreground'}>
                    UI based on the Next.js&nbsp;
                    <a href={'https://vercel.com/templates/next.js/morphic-ai-answer-engine-generative-ui'}>
                        Morphic
                    </a>
                    &nbsp;starter.
                </div>

                {/* Right side*/}
                <div className={'flex items-center space-x-1 text-sm text-muted-foreground'}>
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
                    &nbsp;//&nbsp;
                    <a href={'https://constellate.ai?utm_source=next_chat'} target={'_blank'}
                       className={'underline cursor-pointer text-blue-500'}>
                        constellate.ai
                    </a>

                </div>
            </footer>
        </div>
    )
}

