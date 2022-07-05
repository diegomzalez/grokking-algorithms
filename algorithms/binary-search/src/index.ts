"use strict";
import { print } from "./print";
import { binary_search } from "./binary_search";
const array: Array<number> = [];
for (let i = 1; i < 100; i++) {
  array.push(i);
}
const result = binary_search(array, 50);
print(result, "Binary Search");
