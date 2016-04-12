import swap from './swap';

/**
 * Cocktail sort
 * @see https://en.wikipedia.org/wiki/Cocktail_shaker_sort
 * @param {Array} array
 * @return {Array}
 */
function cocktailSort(array: Array<number>): Array<number> {
    array = array.slice();

    let left: number = 0;
    let right: number = array.length - 1;
    let swapped: boolean = true;

    while (left < right && swapped) {
        swapped = false;

        for (let i: number = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }

        right--;

        for (let i: number = right; i > left; i--) {
            if (array[i] < array[i - 1]) {
                swap(array, i, i - 1);
                swapped = true;
            }
        }

        left++;
    }

    return array;
}

export default cocktailSort;
