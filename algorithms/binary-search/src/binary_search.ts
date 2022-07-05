"use strict";
import { get_mid } from "./get_mid";
/**
 * This function uses the Binary Search algorithm, to search an gave element.
 * @param data Where the element will be search.
 * @param element The element to be search.
 * @returns The position on data where element is.
 */
export const binary_search = (
  data: Array<number>,
  element: number
): number | undefined => {
  let low = 0;
  let high = data.length - 1;
  while (low <= high) {
    const mid = get_mid(low, high);
    const guess = data[mid];
    if (guess === element) return mid;
    if (guess > element) high = mid - 1;
    else low = mid + 1;
  }
  return undefined;
};
