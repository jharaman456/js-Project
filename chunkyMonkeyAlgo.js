function chunkArrayInGroups(arr, size) {
    let result = [];
  
    // Step through the array in increments of `size`
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
  
    return result;
  }
  