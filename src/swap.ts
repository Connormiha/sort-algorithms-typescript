/**
 * Swaps array elements
 * @param {Array} array
 * @param {Number} int1
 * @param {Number} int2
 */
function swap(array: Array<number>, int1: number, int2: number): void {
    let oldInt1: number = array[int1];

    array[int1] = array[int2];
    array[int2] = oldInt1;
}

export default swap;
