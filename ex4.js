/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let r = [[""]];
    let dic = {};
    let w
    strs.forEach((v)=>{
        w = v.split('').sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join('')
        if (!dic[w])
            dic[w] = []
        dic[w].push(v)
    })
    dic = Object.entries(dic).sort(([,a],[,b])=>a.length-b.length);
    r = dic.map(([, arr]) => arr);
    return(r)
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]

));
