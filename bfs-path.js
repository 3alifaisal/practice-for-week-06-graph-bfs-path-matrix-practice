function findNeighbors(node, matrix) {
    let [row,col] = node;
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    const neighbors = [];
    // Up
    if (row > 0) {
        neighbors.push([row - 1, col]);
    }
   
    // Down
    if (row < numRows - 1) {
        neighbors.push([row + 1, col])
    }

   
    // Right
    if (col < numCols - 1) {
        neighbors.push([row, col + 1])
    }

    // Left 
    if (col > 0) {
        neighbors.push([row, col - 1])
    }
    
    return neighbors;
}


function bfsPath(matrix, startNode, endValue) {
   const queue = [startNode];
   const visitedNodes = new Set();
   visitedNodes.add(startNode.toString());
   let coordinates = [];
   while(queue.length > 0){
    let [row,col] = queue.shift();
    coordinates.push([row,col]);
    let neighbors = findNeighbors([row,col], matrix);
    if(matrix[row][col] === endValue) return coordinates;
    for(let neighbor of neighbors){
    if(!visitedNodes.has(neighbor.toString())){
        visitedNodes.add(neighbor.toString());
        queue.push(neighbor);
    }
    

    }
   }
   return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// EXAMPLE TESTS #1. Tests for findNeighbors function
console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// internal node (left, right, down, up)
// [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];