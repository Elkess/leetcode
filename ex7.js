/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let cols = {}
    let rows = {}
    let squares = {}

    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            
            let v = board[i][j]
            if (v==='.')
                continue ;
            if (!cols[j]) cols[j] = new Set()
            if (!rows[i]) rows[i] = new Set()
            let sq = Math.floor(i/3) + "-" + Math.floor(j/3)
            if (!squares[sq]) squares[sq] = new Set()
            if (cols[j].has(v) || rows[i].has(v) || squares[sq].has(v))
                return false
            cols[j].add(v)
            rows[i].add(v)
            squares[sq].add(v)
        }
    }
    return true
};
console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))