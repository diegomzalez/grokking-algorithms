import findSmallest from "./findSmallest.js";

export default function (arr) {
  let newArr = [];
  for (let index = arr.length; index > 0; index--) {
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, smallest + 1);
  }
  return newArr;
}
