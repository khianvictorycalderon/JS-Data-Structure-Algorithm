function searchMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          return [i, j]; // Found at row i, column j
        }
      }
    }
    return null; // Not found
  }
  
  // Example: unsorted matrix with mixed values
  const matrix = [
    [42, "apple", true],
    [null, 3.14, "banana"],
    ["target", false, 0]
  ];
  
  console.log(searchMatrix(matrix, 3.14)); // ➜ [2, 0]  