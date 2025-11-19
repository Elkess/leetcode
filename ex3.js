/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
   let r = [] ;
   for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
         if (nums[i]+nums[j]===target)
            r.push(i,j) 
      }
   }
   return r
};
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,3], 6));
