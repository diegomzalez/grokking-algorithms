"use strict";
/**
 * This function get the mid number between the range of two gave numbers.
 * @param low The begin of the range.
 * @param high The end of the range.
 * @returns The mid number
 */
export const get_mid = (low: number, high: number): number => {
  const mid_formula = Math.round(low + high / 2);
  return mid_formula;
};
