/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = (s.toLowerCase().match(/[a-z0-9]/ig) || []).join('')
    let i=0, j=s.length-1;
    console.log(s)
    while(i<j)
    {
        if (s[i]!=s[j])
            return false;
        i++;
        j--;
    }
    return true;
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));
