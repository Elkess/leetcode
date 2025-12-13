/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let left = 0;
	let seen = new Set();
	let max = 0;

	for (let right = 0; right < s.length; right++) {
		while (seen.has(s[right]))
			seen.delete(s[left++]);
		seen.add(s[right]);
		max = Math.max(max, right - left +1);
		// console.log(seen);
	}
	return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));