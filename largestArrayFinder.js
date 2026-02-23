function largestOfAll(arr) {
    // Create an array to store the largest numbers
    let results = [];
  
    // Loop through each sub-array
    for (let i = 0; i < arr.length; i++) {
      // Find the largest number in the current sub-array
      let largest = arr[i][0]; // start with the first element
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
          largest = arr[i][j];
        }
      }
      // Push the largest number into results
      results.push(largest);
    }
  
    return results;
  }

  console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));