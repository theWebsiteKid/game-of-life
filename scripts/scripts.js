// init block matrix (list of lists)
var block = [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
];
// init nextGen function
var nextGen = function (block) {
// look at any cell in block
// check if it's # of neighbors is 2 OR 3
}; 
// init living cells counter
var count;
var livingCells = [];
// init function to count # of live neighbors
var livingCellsCounter = function (matrix, row, col) {
    var cell = matrix[row][col];
    for (var offsetRow = -1; offsetRow <= 1; offsetRow++) {
        for (var offsetCol = -1; offsetCol <= 1; offsetCol++) {
            if (offsetCol && offsetRow  === 0) {
                // do nothing
            } else if (matrix[row + offsetRow][col + offsetCol] === 1) {
                livingCells.push(cell);
                count = livingCells.length;
            }
        }
    }
    console.log(count);
    return count;
};
// // Test 1: what should nextGen return?
// console.assert(nextGen(block) === block, 'nextGen should return a block if given a block');
// Test 2: how many living neighbors does cell have?
console.assert(livingCellsCounter(block, 1, 1) === 3, 'should return 3');
// Test 3: how many living neighbors does cell block[0][0] have?
console.assert(livingCellsCounter(block, 0, 0) === 1, 'should return 1');