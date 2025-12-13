/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let i = 0;
	let j = height.length-1;
	let maxR = 0;
	let maxL = 0;
	let res = 0;
	while(i<j){
		const left = height[i];
		const right = height[j];
		if (left <= right) {
			maxL = Math.max(maxL, left);
			res += maxL - left;
			i++;
		}
		else
		{
			maxR =  Math.max(maxR, right);
			res += maxR - right;
			j--;
		}
		console.log(Math.min(maxL, maxR) , height[i], res);
	}
	return (res)
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));