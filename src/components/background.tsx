import {FC} from 'react'
import {isMobile} from '@/lib/client-utils'
import {headers} from 'next/headers'

export interface BackgroundProps {
    className?: string
}
const Background: FC<BackgroundProps> = async ({className}) => {
    return !isMobile((await headers()).get('User-Agent') || '')
        ? (
        <svg viewBox="0 0 1000 563" xmlns="http://www.w3.org/2000/svg" className={className}>
            <defs>
                <radialGradient id="b" cx="50%" cy="50%" r="50%" fx="20%" fy="40%">
                    <stop offset="0%" stop-color="#444cf7"/>
                    <stop offset="100%" stop-color="rgba(194,68,247,0.2)"/>
                </radialGradient>
                <filter id="a" x="-500" y="-281.5" width="2000" height="1126" filterUnits="userSpaceOnUse">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="50"/>
                </filter>
            </defs>
            <rect width="100%" height="100%" fill="#fff"/>
            <g filter="url(#a)" className={'translate-x-60'}>
                <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
                     transform="translate(273.044 24.384)">
                    <path fill="url(#b)"
                          d="M491 406.5q-68 106.5-191.5 107T129 407q-47-107-1.5-217t181-125q135.5-15 193 110T491 406.5Z"/>
                </svg>
            </g>

        </svg>
    )
        : (
            <svg viewBox="0 0 700 1246" xmlns="http://www.w3.org/2000/svg" className={className + ' top-36'}>
                <defs>
                    <radialGradient id="b" cx="50%" cy="50%" r="50%" fx="20%" fy="40%">
                        <stop offset="0%" stop-color="#444cf7"/>
                        <stop offset="100%" stop-color="rgba(194,68,247,0.2)"/>
                    </radialGradient>
                    <filter id="a" x="-350" y="-623" width="1400" height="2492" filterUnits="userSpaceOnUse">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="62.3"/>
                    </filter>
                </defs>
                <rect width="100%" height="100%" fill="#fff"/>
                <g filter="url(#a)">
                    <svg width="872.2" height="872.2" viewBox="0 0 623 623" xmlns="http://www.w3.org/2000/svg"
                         transform="translate(-101.609 198.972)">
                        <path fill="url(#b)"
                              d="M491 406.5q-68 106.5-191.5 107T129 407q-47-107-1.5-217t181-125q135.5-15 193 110T491 406.5Z"/>
                    </svg>
                </g>
            </svg>
        )
}

export default Background