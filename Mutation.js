function mutation(arr) {
    // Convert both strings to lowercase
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();
  
    // Check if every character in second exists in first
    return second.split("").every(char => first.includes(char));
  }
  
  // Tests
  console.log(mutation(["hello", "Hello"])); // true
  console.log(mutation(["hello", "hey"]));   // false
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
  console.log(mutation(["Mary", "Army"]));   // true
  console.log(mutation(["Mary", "Aarmy"]));  // true
  console.log(mutation(["Alien", "line"]));  // true
  console.log(mutation(["floor", "for"]));   // true
  console.log(mutation(["Noel", "Ole"]));    // true
  