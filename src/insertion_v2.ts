import swap from './swap';

/**
 * Insertion sort
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 * @param {Array} array
 * @return {Array}
 */
function insertionSort(array: Array<number>): Array<number> {
    array = array.slice();

    let j: number = 1;
    let i: number = 1;

    while (i < array.length) {
        if (j === 0 || array[j] >= array[j - 1]) {
            i++;
            j = i;
            continue;
        }

        swap(array, j, j - 1);
        j--;
    }

    return array;
}

export default insertionSort;
