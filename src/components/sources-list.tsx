'use client'

import {use} from 'react'

export interface Source {
    text?: string
    title?: string
    icon?: string
    link?: string
}

export interface SourcesListProps {
    sources: Promise<Array<Source>>
}

export function SourcesList({sources}: SourcesListProps) {

    const sourcesList: Array<Source> = use(sources)
}