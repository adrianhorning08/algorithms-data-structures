var threeSum = function(nums) {
    const results = [];
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let x = -(nums[i] + nums[j]);
            let indexOfX = nums.indexOf(x);
            if (indexOfX !== -1 && indexOfX !== i && indexOfX !== j) {
                results.push([nums[i], nums[j], x])
            }
        }
    }
    return results;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function containsDupsNLogN(arr, range) {
  const newArr = arr.sort();
  return newArr
}

function nFibs(n) {
  if (n <= 2) return [0,1];

  let fibs = nFibs(n-1);
  fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2])
  return fibs;
}

// O(1) space and O(n) time
function containsDups(arr) {
  for (var i = 0; i < arr.length; i++) {
    let index = Math.abs(arr[i]) - 1;
    if (arr[index] < 0) {
      return index+1;
    } else {
      arr[index] = -arr[index];
    }
  }
  return -1
}

function getMinimumDifference(a, b) {
    const results= [];

    for (let i = 0; i < a.length; i++) {
        results.push(helper(a[i], b[i]))
    }

    function helper(str1, str2) {
        let count = 0;
        let longest;
        let short;
        if (str1.length > str2.length) {
            longest = str1;
            short = str2;
        } else {
            short = str1;
            longest = str2;
        }
          longest = longest.split('').sort();
          short = short.split('').sort();
        for (let i = 0; i < longest.length; i++) {
            if (longest[i] !== short[i]) {
                count++;
            }
        }
        if (count <= short.length) {
            return short.length - count;
        } else {
            return -1;
        }
    }
    return results;
}


function playlist(songs, k, q) {
    const indexes = {};
    const songToListen = songs[q];
    const songOn = songs[k];
    songs.forEach((song, i) => indexes[song] = i);

    return Math.abs(indexes[songToListen] - indexes[songOn]);

}

function braces(values) {
    const results = [];

    values.forEach(str => {
        if(helper(str)) {
            results.push('YES');
        } else {
            results.push('NO');
        }
    });

    function helper(str) {
        const right = [];
        const braces = {
          '(': ')',
          '{': '}',
          '[': ']'
        };
        for (let i = 0; i < str.length; i++) {
            if (braces[str[i]]) {
                right.push(braces[str[i]])
            } else {
              let blah = right.pop();
                if (str[i] === blah) {
                    continue;
                } else {
                  return false;
                }
            }
        }
        return true;
    }

    return results;
}

var permute = function(nums) {
    if (nums.length <= 1) return [nums];

    const first = nums.shift();
    const perms = permute(nums);

    const results = [];

    perms.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            results.push(perm.slice(0,i).concat([first]).concat(perm.slice(i, perm.length)));
        }
    })
    return results.sort();
};

var divide = function(dividend, divisor) {
    let count = 0;
    let total = 0;
    let negative = false;
    let bothNegative = false;
    if (divisor < 0 && dividend < 0) {
        bothNegative = true;
    } else if (divisor < 0 || dividend < 0) {
        negative = true;
    }

    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    if (divisor === 1) return
    while (total + divisor <= dividend) {
        count++;
        total+= divisor;
    }

    if (negative) {
        return Math.max(-count, -Math.pow(2,31)-1);
    } else {
        return Math.min(count, Math.pow(2,31)-1);
    }
};


var lengthOfLongestSubstring = function(s) {
    let max = 0;
    const set = new Set();
    let a = 0;
    let b = 0;
    if (s.length === 0) return 0;

    while (a < s.length && b < s.length) {
      if (!set.has(s[b])) {
        set.add(s[b++]);
        max = Math.max(max, b-a);
      } else {
        set.delete(s[a++]);
      }
    }
    return max;
};


// create a function that returns whether a node is a descendant of another node. params are current DOM nodes
function descendant(node1, node2) {
  node1 = document.getElementById(node1);
  node2 = document.getElementById(node2);
  return node1.contains(node2);
}

const Arithmetic = function(n){
  this.n = n;
  return this.n;
};

Arithmetic.prototype.subtract = function (n) {
  this.n -= n;
  return this;
};

Arithmetic.prototype.val = function () {
  return this.n;
};

Arithmetic.prototype.add = function (n) {
  this.n += n;
  return this;
};

const workingNumber = new Arithmetic(10).subtract(3).add(2).val();


var strStr = function(haystack, needle) {
    if (haystack.length === 0) return 0;
    let j = 0;
    for (let i = needle.length; i < haystack.length; i++) {
        if (haystack.slice(j,i) === needle) return j;
        j++;
    }
    return -1;
};



var firstUniqChar = function(s) {
    // what if you went from the back
    // if the num doesn't exist in the obj, update like an answer variable
    const obj = {};
    let letter;
    let idx;
    for (let i = s.length-1; i >= 0; i--) {
       if (obj[s[i]]) {
         obj[s[i]]++;
       } else {
         idx = i;
         letter = s[i];
         obj[s[i]] = 1;
       }
    }
    if (obj[letter] === 1) {
      return idx;
    } else {
      return -1;
    }
};
/*
NIO
given a roman string (XVIIIXIII...)
check if it's a valid string
that was an easy one

ah because for roman number, you can only subtract 1 character from a bigger one, i.e. IV = 4
you cant have IIV = 3
so say, you can XIV = 14, but a string of XIIV would be an invalid stirng
you can't have smaller number before a bigger number

you can only subtract 1 previous number only, then any preceding numbers have to be equal or lesser than previous one.
19 is XIX, not IXX

Assumptions ->
- What is the range?
- I dont get this at all cause as long as the characters are roman numerals
you can coerce any letters into a number
*/

function validRoman(str) {

  // for (let i = str.length-1; i > 0 ; i--) {
  //   let char = str[i];
  //   if (char === 'V') {
  //     if (str[i-1] === 'I' && str[i-2] === 'I') {
  //       return false;
  //     } else if (str[i-1] === 'I' && str[i+1] === 'I') {
  //       return false;
  //     }
  //   } else if (char === 'X') {
  //     if (str[i-1] === 'I' && str[i-2] === 'I') {
  //       return false;
  //     } else if (str[i-1] === 'V') {
  //       return false;
  //     } else if (str[i-1] === 'I' && str[i+1] === 'I') {
  //       return false;
  //     }
  //   } else if (char === 'L') {
  //     if (str[i-1] !== 'X') {
  //       if (i !== 0) {
  //         return false;
  //       }
  //     }
  //   } else if (char === 'C') {
  //     if (str[i-1] !== 'X' && str[i-1] !== 'C') {
  //       if (i !== 0) {
  //         return false;
  //       }
  //     }
  //   }
  // }
  // return true;

  const romans = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'IV': 4,
    'IX': 9,
    'XL': 40
  }

  let currNum = 0;
  let prevNum = 0;
  for (var i = str.length-1; i > 0; i--) {
    if (romans[str.slice(i-1,i+1)]) {
      currNum = romans[str.slice(i-1,i+1)];
      i--;
    } else {
      currNum = romans[str[i]];
    }
    if (prevNum === 0) {
      prevNum = currNum;
    } else if (currNum < prevNum) {
      return false;
    } else {
      prevNum = currNum;
    }
  }
  return true;
}

/*
NIO
given a MxN matrix array retrieve the elements, in clockwise order
  [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
  ]
  [1,2,3,6,9,12,11,10,7,4,5,8]

*/

function retrieveMatrix(matrix) {
  const newArr = [];
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = matrix.length-1;
  let colEnd = matrix[0].length-1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // print top row
    for (i = colStart; i <= colEnd; i++) {
      newArr.push(matrix[rowStart][i])
    }
    rowStart++;

    // print right col
    for (i = rowStart; i <= rowEnd; i++) {
      newArr.push(matrix[i][colEnd]);
    }
    colEnd--;

    // print bottom row
    for (i = colEnd; i >= colStart; i--) {
      newArr.push(matrix[rowEnd][i])
    }
    rowEnd--;

    // print left col
    for (i = rowEnd; i >= rowStart; i--) {
      newArr.push(matrix[i][colStart]);
    }
    colStart++;
  }
  return newArr;
}
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]
];


var trailingZeroes = function(n) {
    let copy = n;
    let product = 1;
    while (copy > 0) {
        product *= copy;
        copy--;
    }

    let str = product.toString();
    let count = 0;
    for (let i = str.length-1; i > 0; i--) {
        if (str[i] === '0') {
            count++;
        } else {
            return count;
        }
    }
    return count;
};


// We need the ability to divide an unknown integer into a given number
// of even parts — or at least as even as they can be.
// The sum of the parts should be the original value, but each part
// should be an integer, and they should be as close as possible.
// Example code:
// splitInteger(20, 6) // returns [3,3,3,3,4,4]

function splitInteger(n, spots) {
  const arr = [];
  while (n > 0) {
    let num = Math.round(n / spots);
    arr.push(num);
    n -= num;
    spots--;
  }
  return arr.sort();
}

//
// Complete the function so that it returns an array of integer representing the parts.
// Ignoring the order of the parts, there is only one valid solution for each input to your
// function!
// (Also, there is no reason to test for edge cases:
// the input to your function will always be valid for this challenge.)
//
// Dave has a lot of data he is required to apply filters to, which are simple enough,
// but he wants a shorter way of doing so.
// He wants the following functions to work as expected:
// even # [1,2,3,4,5].even should return [2,4]
// odd # [1,2,3,4,5].odd should return [1,3,5]
// under # [1,2,3,4,5].under(4) should return [1,2,3]
// over # [1,2,3,4,5].over(4) should return [5]
// in_range # [1,2,3,4,5].in_range(1..3) should return [1,2,3]
//
// They should also work when used together, for example:
// (1..100).to_a.even.in_range(18..30) # should return [18, 20, 22, 24, 26, 28, 30]
//
// And finally the filters should only accept integer values from an array, for example:
// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even # should return [300, 122]

Array.prototype.even = function() {
  return this.filter( el => {
    return el % 2 === 0;
  })
}

Array.prototype.odd = function() {
  return this.filter( el => {
    return el % 2 !== 0;
  })
}

Array.prototype.under = function(n) {
  return this.filter( el => {
    return el < n;
  })
}

Array.prototype.over = function(n) {
  return this.filter( el => {
    return el > n;
  })
}

Array.prototype.inRange = function(min, max) {
  return this.filter( el => {
    return el >= min && el <= max;
  })
}


// You've been tasked with writing an autocorrect service for messages sent by your legal team.
// The messages which are sent to other lawyers need to be updated so that each message sent
// references the lawyer's client for clarity. To do this you need to replace all instances of
// "you" and it's misspellings with "your client".
// Write a function called autocorrect that takes a string and replaces all instances of
// "you", "youuu", or "u" (not case sensitive) with "your client" (always lower case).
// Return the resulting string.
// Here's the slightly tricky part: These are informal messages, so there are different
// forms of "you" and "u".
// For the purposes of this challenge, here's what you need to support:
//
// "youuuuu" with any number of u characters tacked onto the end
// "u" at the beginning, middle, or end of a string, but NOT part of a word
// "you" but NOT as part of another word like "young" or "Bayou"
//

function autocorrect(str) {
  const newSent = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      let j = 0;
      let temp = '';
      while (str[i] !== ' ') {
        temp += str[i];
        j++;
      }
      newSent.push(helper(temp));
      i+=j;
    }
  }
  return newSent.join(' ');
}

function helper(word) {
  // have to keep punctuation in mind
  // for simplicity, lets not worry about it right now...
  for (var i = 0; i < word.length; i++) {
    word[i]
  }
}




var plusOne = function(digits) {

    // 999
    // 989
    // start from the back
    // if its a nine, check the number ahead of it
    // if that number is a 9, recurse?, if there is nothing, set curr number to 0, and push a 1 at the front of the array
    for (let i = digits.length-1; i > -1; i--) {
        if (digits[i] === 9) {
            if (digits[i-1] === 9) {
                return plusOne(digits.slice(0,i));
            } else if (digits[i-1] === undefined) {
                digits[i] = 0;
                digits.unshift(1);
                return digits
            } else {
                digits[i]++;
                return digits;
            }
        } else {
            digits[i]++;
            return digits
        }
    }
    return digits;
};

function pancakeSort(arr) {

  for (let i = arr.length-1; i > 0; i--) {
    maxIndex = max(arr,i)
    flip(arr, maxIndex);
    flip(arr, i);
  }
  return arr;
}

function flip(arr, k) {
  const pivot = Math.floor((k+1)/2);
  for (let i =0; i < pivot; i++) {
    let temp = arr[i];
    arr[i] = arr[k - i];
    arr[k - i] = temp;
  }
}

function max(arr,k) {
  let ans = 0;
  for (let i = 0; i < k; i++) {
    if (arr[i] > arr[ans]) {
      ans = i;
    }
  }
  return ans;
}

$(document).ready(function() {
  $("#div2").find("*").css({"color": "red", "border": "5px solid red"})
  $("div").find("span").css({"color": "blue", "border": "5px solid lightgreen"})
})

function sumInRange(nums, queries) {
    var sum = 0;
    queries.forEach(arr => {
        var first = arr[0];
        var second = arr[1];
        sum += nums.slice(first,second).reduce((a,b) => a+b)
    })
    return sum;
}


// Wayfair coding challenge
// You're given a vector of vectors of words, e.g.:
// [['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']].
// Write a generalized function that prints all combinations of one word from the first vector,
// one word from the second vector, etc.
// The solution may not use recursion.
// # NOTE: the *number of vectors* and number of elements within each vector may vary.
var array = [['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']];

function printCombos(array) {
  var results = [[]];

  for (var i = 0; i < array.length; i++) {
    var currentSubArray = array[i];
    var temp = [];
    for (var j = 0; j < results.length; j++) {
      for (var k = 0; k < currentSubArray.length; k++) {
        temp.push(results[j].concat(currentSubArray[k]));
      }
    }
    results = temp;
  }
  return results;
}


// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
var lengthOfLongestSubstring = function(s) {
  var obj = {};
  var max = 0;
  var start = 0;
  for (var i = 0; i < s.length; i++) {
    var letter = s[i];
    var curr = obj[letter];
    if (curr !== null && start <= curr) {
      start = curr  + 1;
    } else {
      max = Math.max(max, i - start +1);
    }
    obj[letter] = i;
  }

  return max;
};
// something
// 468. Validate IP Address
// https://leetcode.com/problems/validate-ip-address/description/
var validIPAddress = function(IP) {
  if (IP.includes('.')) {
    return validIP4(IP);
  } else {
    return validIP6(IP);
  }
};

function validIP4(ip) {
  let split = ip.split('.');
  if (split.length !== 4) return "Neither";
  for (var i = 0; i < split.length; i++) {
    let curr = split[i];
    if (curr[0] === '0') {
      return "Neither";
    } else if ((/[a-z]/g).test(curr)) {
      return "Neither";
    }
    else if (Number(curr) >= 255) {
      return "Neither";
    } else {
      continue;
    }
  }
  return "IPv4";
}

function validIP6(ip) {
  let split = ip.split(':');
  if (split.length > 8) return "Neither";
  for (var i = 0; i < split.length; i++) {
    let curr = split[i].toLowerCase();
    if (curr.length === 1 && curr[0] === '0') {
      continue;
    } else if (curr.length === 4) {
      continue;
    } else if (curr.length < 4) {
      if (curr[0] !== '0') {
        continue;
      } else {
        return 'Neither';
      }
    } else {
      return "Neither";
    }
  }
  return "IPv6";
}

// Leetcode 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/description/
function longestValidParentheses(str) {
  // "()(()"
  // "()(())"
  var leftParens = [-1];
  var max = 0;

  for (var i = 0; i < str.length; i++) {
      if ('(' === str[i]) {
        leftParens.push(i);
      } else {
        leftParens.pop();
        if (leftParens.length === 0) {
          leftParens.push(i);
        } else {
          max = Math.max(max, i - leftParens.slice(-1)[0]);
        }
      }
  }
  return max;
}

// Leetcode 698. Partition to K Equal Sum Subsets
//Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// Output: True
// Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
var canPartitionKSubsets = function(nums, k) {
// so I think you would set it up in buckets, like the hashing example
// you would check to see if it exceeds goal
// you would recursively search with one less number
// if you placed every number successfully, it was a success


};
var nums = [4, 3, 2, 3, 5, 2, 1], k = 4;


// Workfront questions
// reverse a string
function reverse(str) {
  var newStr = '';
  for (var i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// find the common numbers in 2 arrays and return them
// [8,4,2,7], [9,0,4,2,8] -> [2,4,8]
function common(arr1, arr2) {
  var results = [];
  var shortest;
  var longest;
  if (arr1.length <= arr2.length) {
    shortest = arr1;
    longest = arr2;
  } else {
    longest = arr2;
    shortest = arr1;
  }
  for (var i = 0; i < shortest.length; i++) {
    if (longest.includes(shortest[i])) {
      results.push(shortest[i]);
    }
  }
  return results;
}


// write a function that takes 2 parameters, S and T
// S will be a string, for example "Hello ${val1} and ${val2}!"
// T will be a string, for example "{"val1":"Sarah","val2":"Jane"}"
// your output should return "Hello Sarah and Jane!"

function myInterpolate(S,T) {
  T = JSON.parse(T);
  S = S.replace(/\$/g,'');
  var newStr = '';
  for (var i = 0; i < S.length; i++) {
    var curr = S[i];
    if (curr !== '{') {
      newStr += curr;
    } else {
      var j = i+1;
      var temp = '';
      while (S[j] !== '}') {
        temp += S[j];
        j++;
      }
      i = j;
      newStr += T[temp];
    }
  }
  return newStr;
}

// write a function that takes a string and performs the math operation
// it should only take 2 operands and 1 operator
// will only be (+ - / *)
// for example ("4 + 5") -> 9 or ("-3 - 10") -> -13

function solution(str) {
  var operandsCounter = 0;
  var op1;
  var op2;
  var operatorCounter = 0;
  var operator;
  // to speed this up, you prorbably wouldn't want to split
  str = str.split(' ');

  for (var i = 0; i < str.length; i++) {
    var curr = str[i];
    if (isNaN(curr)) {
      operatorCounter++;
      operator = curr;
    } else {
      operandsCounter++;
      op1 === undefined ? op1 = Number(curr) : op2 = Number(curr);
    }
  }

  if (operandsCounter > 2 || operator > 1) return false;

  switch (operator) {
    case '+':
      return op1 + op2;
    case '-':
      return op1 - op2;
    case '/':
      return op1 / op2;
    case '*':
      return op1 * op2;
  }
}
