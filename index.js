// var nums = [-1, 0, 1, 2, -1, -4];
var nums = [-8, -7, 5, 2];

// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
   var results = [];
   nums = nums.sort();
   for (var i = 0; i < nums.length-2; i++) {
     var currNum = nums[i];

     var j = i+1;
     var k = nums.length -1;
     while (j < k) {
       if (currNum + nums[j] + nums[k] === 0) {
         results.push([currNum, nums[j], nums[k]]);
         j++;
         k--;
       } else if (currNum + nums[j] + nums[k] < 0) {
         j++;
       } else if (currNum + nums[j] + nums[k] > 0) {
         k--;
       }
     }
   }
   return results;
};

console.log(threeSum(nums));
