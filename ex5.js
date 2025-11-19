/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    m = new Map()
    for(i=0;i< nums.length;i++)
        m.set(nums[i], (m.get(nums[i]) || 0)+1)
    let arr = [...m].sort(([,a], [,b])=>b-a)
    let r = []
    for(i=0;i<k;i++) r.push(arr[i][0]);
    return(r);
};
console.log(topKFrequent([-1,-1], 1))