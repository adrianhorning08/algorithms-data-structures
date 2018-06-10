/*
_____________________________________________________________________
16.6 Smallest Difference
  Assumptions ->

  Plan ->
  
*/

function smallestDiff(arr1, arr2) {

}
/*
_____________________________________________________________________
16.5 Factorial Zeros
  Assumptions ->
    Well, you won't be able to do it by finding n! and then doing toString and counting 0's

  Plan ->
*/

function factorialZeros(n) {
  // mathy problem
}

/*
_____________________________________________________________________
16.1 Number Swapper
  Assumptions ->

  Plan ->
*/
function numSwap(a,b) {
  a = a - b; // 5 - 10 = -5
  b = a + b; // - 5 + 10 = 5
  a = b - a; // 5 - -5 = 10
  return [a,b]
}
// console.log(numSwap(1,2));

/*
_____________________________________________________________________
1.9 String Rotation
  Assumptions ->
    Empty strings?
    ASCII or Unicode?

  Plan ->
    Really smart way CTCI does it, concatenate string1 to string1, and see
    if str2 is a substring of str1
*/
function stringRotation(str1,str2) {
  if (str1.length !== str2.length || str2.length === 0 || str1.length === 0) {
    return false;
  }

  let temp = str1 + str1;

  for (var i = 0; i < temp.length; i++) {
    let newStr = temp.slice(i, str2.length+i);
    if (str2 === newStr) {
      return true;
    }
  }
  return false;
}
// console.log(stringRotation('waterbottle', 'erbottlewat'));


/*
_____________________________________________________________________
1.8 Zero Matrix
  If you find a zero, recurse up, down, right and left

  Assumptions ->
  Not sure, seems pretty straight forward

  Plan ->


  *This might really eff up cause if it changes the col and row to 0
  right away, I'll end up with all 0's in the entire table.
*/

function zeroMatrix(matrix) {
  const rows = new Array(matrix.length).fill(false);
  const cols = new Array(matrix[0].length).fill(false);

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (var i = 0; i < rows.length; i++) {
    if (rows[i]) {
      nullifyRow(i);
    }
  }

  for (var i = 0; i < cols.length; i++) {
    if (cols[i]) {
      nullifyCol(i);
    }
  }

  function nullifyRow(index) {
    for (var i = 0; i < matrix[index].length; i++) {
      matrix[index][i] = 0;
    }
  }

  function nullifyCol(index) {
    for (var i = 0; i < matrix.length; i++) {
      matrix[i][index] = 0;
    }
  }
  return matrix;
}

const matriz = [
  [1,2,0,4],
  [5,0,7,8],
  [5,4,1,4],
  [3,1,3,4]
];

// console.log(zeroMatrix(matriz));


/*
_____________________________________________________________________
1.7 Rotate Matrix
  The trick is being able to do it in place
*/
function rotateMat(matrix) {

  for (var layer = 0; layer < matrix.length/2; layer++) {
    let first = layer;
    let last = matrix.length - 1 - layer;
    for (var i = first; i < last; i++) {
      let offset = i - first;

      let top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  return matrix;
}
const mat = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];
// console.log(rotateMat(mat));

/*_____________________________________________________________________
1.6 String Compression
missippi -> m1i1s2i1p2i1
if compression won't make it smaller than the original string, return orignal string
Assume lowercase
Assumptions ->
-Spaces?
*/

function compress(str) {
  // loop over string
  // keep track of the count
  // as soon as the next letter than the current letter (or its at the end of the string), append the
  // tempCount and letter onto a newStr
  // then compare the str lengths to see which str to return

  let newStr = '';
  let tempCount = 1;

  for (var i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter !== str[i+1]) {
      newStr += letter += tempCount
      tempCount = 1;
    } else {
      tempCount++;
    }
  }
  return newStr.length < str.length ? newStr : str;
}

// _____________________________________________________________________
// 1.5 One Away

// Assumptions ->
// case sensative?
// character set ASCII or Unicode?
// spaces?

function oneAway(str1, str2) {
  // example -> pale, pal
  // you can insert, remove, or replace a character

  // if all characters of str2 are the same, except for 1
  let count = 0;
  let longest;
  let shortest;

  if (str1.length >= str2.length) {
    longest = str1;
    shortest = str2;
  } else {
    longest = str2;
    shortest = str1;
  }

  for (var i = 0; i < longest.length; i++) {
    if (longest[i] !== shortest[i]) {
      count++;
    }
  }

  return count > 1 ? false : true;
}

// _____________________________________________________________________
// 1.4 Palindrome Permutation
// ASCII chars?
// case sensative?
// spaces matter?

function palinPerm(str) {
  // a string can only have 1 odd character count

  // its always gonna be O(n), but a small improvement would be to
  // check for the odd count as you're building the obj

  const obj = {};

  for (var i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter !== ' ') {
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  }

  let oddCount = 0;

  Object.values(obj).forEach(n => {
    if (n % 2 !== 0) {
      oddCount++;
    }
  })

  return oddCount > 1 ? false : true;
}



// URLify
// assumptions -
// ASCII characters?

function URLify(str,len) {
  str = str.slice(0,len);
  return str.split(' ').join('%20')
}


// check permutations
// assumptions -
// case senesative?
// whitespace significant?
// character set ASCII?


// in n log n time you could sort both of the strings
// in O(n) time you could loop over one string and put the letters with the count in an obj
// and check that with the other string

function perms(str1, str2) {
  const obj1 = helper(str1);
  const obj2 = helper(str2);

  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

function helper(str) {
  const obj = {};
  for (var i = 0; i < str.length; i++) {
    let letter = str[i];
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  return obj;
}
