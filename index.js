// if there are no smaller items for each item, return -1.
// so if all items increase

function maxDifference(arr) {
  var largestDiff = arr[1] - arr[0];
  var n = arr[0];
// 2 for loops
// start at the end
// if arr[j] < arr[i]
// if arr[i] - arr[j] > largestDiff
// largestDiff = arr[i] - arr[j]

  for (var i = arr.length-1; i >= 0; i--) {
    var currentEl = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      var pastEl = arr[j];
      if (pastEl < currentEl && j < n) {
        if ((currentEl - pastEl) > largestDiff) {
          largestDiff = (currentEl - pastEl);
        }
      }
    }
  }
  return largestDiff === arr[1] - arr[0] ? -1 : largestDiff;
}

var arr = [6, 7, 9, 5, 6, 3, 2];

console.log(maxDifference(arr));
