// 468. Validate IP Address
// https://leetcode.com/problems/validate-ip-address/description/

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
console.log(canPartitionKSubsets(nums,k));


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
