export default function (arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    if (element < smallest) {
      smallest = element;
      smallestIndex = index;
    }
  }
  return smallestIndex;
}
