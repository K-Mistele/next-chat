'use client'

import type {QueryAnswer, QueryWithAnswer} from '@/lib/query-with-answer'
import {memo} from 'react'


export interface AnswerPanelProps extends QueryAnswer {

}

export const AnswerPanel = memo(
    function AnswerPanel({content, status, rewritten, images, sources}: AnswerPanelProps) {

        return <></>
    },
    function areEqual(prevProps: AnswerPanelProps, nextProps: AnswerPanelProps) {
        return (
            prevProps.content === nextProps.content &&
            prevProps.status === nextProps.status &&
            prevProps.content === nextProps.status &&
            prevProps.sources?.length === nextProps.sources?.length &&
            prevProps.images?.length === nextProps.sources?.length
        )
    }
)