import {useEffect, useState} from 'react'

export const useDebouncedValue = <T>(inputValue: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(inputValue);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue, delay]);

    return debouncedValue;
};