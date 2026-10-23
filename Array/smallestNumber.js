const arr = [4, 1, 6, 3, -12, 45, 2, 18];

function smallestValue(arr) {
  let smallestNumber = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (smallestNumber > arr[i]) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

console.log(smallestValue(arr));
