function findLongestWordLength(str) {
    // Split the string into words
    const words = str.split(" ");
    
    // Use Math.max to find the longest word length
    return Math.max(...words.map(word => word.length));
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
  console.log(findLongestWordLength("May the force be with you")); // 5
  console.log(findLongestWordLength("Google do a barrel roll")); // 6
  console.log(findLongestWordLength("Googling do a barrel roll")); // 8
  console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
  