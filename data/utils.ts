/**
 * Convert an Array<T> into an Array<Array<T>> in numParts parts - useful for splitting and batching to avoid hitting
 * rate limits
 * @param array
 * @param numParts
 */
export function sliceArrayIntoParts<T>(array: Array<T>, numParts: number): Array<Array<T>> {
    const result = [];
    const partSize = Math.ceil(array.length / numParts); // Calculate size of each part

    for (let i = 0; i < numParts; i++) {
        const start = i * partSize;
        const end = start + partSize;
        const part = array.slice(start, end); // Use slice to get part of the array
        result.push(part);
    }

    return result;
}