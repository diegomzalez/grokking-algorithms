import findSmallest from "./findSmallest.js";

export default function (arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, smallest + 1);
    index--;
  }
  return newArr;
}
