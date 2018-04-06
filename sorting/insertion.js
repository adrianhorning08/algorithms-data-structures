var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = curr;
  }
  return arr;
}

console.log(insertionSort(arr));
