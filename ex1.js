var containsDuplicate = function(nums) {
    
    let n = new Set(nums)
    return (n.size !== nums.length)
};
console.log(containsDuplicate([1,2,3,1]))