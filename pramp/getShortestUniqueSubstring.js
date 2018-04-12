function getShortestUniqueSubstring(arr, str) {
  var result = '';
  var uniqCounter = 0;
  var obj = {};
  var head = 0;
  arr.forEach(el => obj[el] = 0);
  for (var tail = 0; tail < str.length; tail++) {
    var tailChar = str[tail];
    if (obj.hasOwnProperty(tailChar) === false) {
      continue;
    }
    var tailCount = obj[tailChar];
    if (tailCount === 0) {
      uniqCounter++;
    }
    obj[tailChar]++;

    while (uniqCounter === arr.length) {
      var tempLength = tail - head;
      if (result === '' || tempLength < result.length) {
        result = str.slice(head, tail+1);
      }
      var headChar = str[head];

      if (obj.hasOwnProperty(headChar)) {
        var headCount = obj[headChar] - 1;
        if (headCount === 0) {
          uniqCounter--;
        }
        obj[headChar] = headCount;
      }
      head++;
    }
  }
  return result;
}

arr = ['x','y','z'], str = "xyyzyzyx"

console.log(getShortestUniqueSubstring(arr,str));
