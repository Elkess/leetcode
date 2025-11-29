/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b)=>a-b)
    let r = []
    let seen = new Set()
    let hasBeenChecked = new Set()
    nums.forEach((v, index)=>{
        if (!hasBeenChecked.has(v))
        {
            let i=index+1, j=nums.length-1;
            while(i<j)
            {
                let sum  = v+nums[i]+nums[j]
                let arr = [v, nums[i], nums[j]]
                if (!sum)
                {
                    let key = arr.join('')
                    if (!seen.has(key))
                    {
                        seen.add(key)
                        r.push(arr)
                    }
                }
                if (sum < 0)
                    i++;
                else
                    j--;
            }
            hasBeenChecked.add(v)
        }
    })
    return (r);
};
console.log(threeSum([-1,0,1,2,-1,-4]));
