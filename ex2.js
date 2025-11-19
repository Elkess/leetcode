 function getStr(s)
 {
    return(s.split('').sort((a, b)=>a.charCodeAt(0)-b.charCodeAt(0)).join(''))
 }
var isAnagram = function(s, t) {
    s = getStr(s)
    t = getStr(t)
    console.log(s, t)
    return (t===s)
};
console.log(isAnagram("anagram", "nagaram"))