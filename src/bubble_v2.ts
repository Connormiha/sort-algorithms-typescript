import swap from './swap';

/**
 * Bubble sort
 * @see https://en.wikipedia.org/wiki/Bubble_sort
 * @param {Array} array
 * @return {Array}
 */
function bubbleSort(array: Array<number>): Array<number> {
    array = array.slice();

    let i: number = array.length - 1;
    let j: number = 0;

    while (i > 0) {
        if (j === i) {
            j = 0;
            i--;
            continue;
        }

        if (array[j] > array[j + 1]) {
            swap(array, j, j + 1);
        }

        j++;
    }

    return array;
}

export default bubbleSort;
