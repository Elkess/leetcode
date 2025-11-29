/**
 * @param {number[]} d
 * @return {number}
 */
var countPairs = function(d) {
    const MOD = 1e9 + 7;
    const bigg =2 * Math.max(...d)
    const powersOf2 = []
    for(let p=1;p<=bigg;p*=2)
        powersOf2.push(p)
    let map = new Map()
    let count = 0
    for(i=0;i<d.length;i++)
    {
        powersOf2.forEach(v=>{
            let comp = v - d[i]
            if (map.has(comp))
                count += map.get(comp) 
        })
        map.set(d[i], (map.get(d[i]) || 0) + 1);
    }
    return count% MOD
};
console.log(countPairs([1,1,1,1,1]));
