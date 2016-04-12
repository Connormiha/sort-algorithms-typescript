import swap from './swap';

/**
 * Insertion sort
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 * @param {Array} array
 * @return {Array}
 */
function insertionSort(array: Array<number>): Array<number> {
    array = array.slice();

    for (let i: number = 0; i < array.length - 1; i++) {
        for (let j: number = i + 1; j > 0; j--) {
            if (array[j] >= array[j - 1]) {
                break;
            }

            swap(array, j, j - 1);
        }
    }

    return array;
}

export default insertionSort;
