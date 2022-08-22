"use strict";
/**
 * This function show the result of a any operation, but it include the name of the operation and its run time.
 * @param element The result to be show.
 * @param name The name of the operation.
 */
export const print = (element: any, name: string): void => {
  console.group(name);
  console.time(name);
  console.log(element);
  console.timeEnd(name);
  console.groupEnd();
};
