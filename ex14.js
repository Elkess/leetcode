/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let l, r = 0;
	let maxProfit = 0
	while(r<prices.length)
	{
		if (prices[l] < prices[r]){
			maxProfit = Math.max(maxProfit, prices[r] - prices[l])
		}
		else
			l = r
		r++;
	}
	return maxProfit
};
console.log(maxProfit([7,1,5,3,6,4]));