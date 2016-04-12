import swap from './swap';

/**
 * Comb sort
 * @see https://en.wikipedia.org/wiki/Comb_sort
 * @param {Array} array
 * @return {Array}
 */
function cocktailSort(array: Array<number>): Array<number> {
    array = array.slice();

    let gap: number = array.length;
    let swapped: boolean = false;

    while (swapped || gap > 1) {
        if (gap > 1) {
            gap = Math.floor(gap / 1.247);
        }

        swapped = false;

        for (let i: number = 0; i + gap < array.length; i++) {
            if (array[i] > array[i + gap]) {
                swap(array, i, i + gap);
                swapped = true;
            }
        }
    }

    return array;
}

export default cocktailSort;
