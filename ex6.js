/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    product = [...nums].reduce((t, v)=> t*=v)
    list = [...nums].map(v=> product/v)
    return list
};
console.log(productExceptSelf([1,2,3,4]
));
