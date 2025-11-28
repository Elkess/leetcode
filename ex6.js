/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums)
{
    let n = nums.length;
    let ans = Array(n).fill(0);
    let left = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = left;
        left *= nums[i];
    }
    // console.log(ans)
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }
    // console.log(right)
    return ans;
};
console.log(productExceptSelf([1,0,3,4]
));
