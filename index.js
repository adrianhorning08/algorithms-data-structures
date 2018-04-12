


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

// Pramp
// input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sortKMessedArray(arr, k) {
// insertion sort

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
