function maskEmail(email) {
    const atIndex = email.indexOf("@");
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
  
    if (username.length <= 2){
      return email;
    }
  
    const firstChar = username[0];
    const lastChar = username[username.length - 1];
    const maskedChar = "*".repeat(username.length - 2);
  
    return firstChar + maskedChar + lastChar + domain;
  }
  
  const email = "apple.pie@example.com";
  
  // Call the function and output the result
  console.log(maskEmail(email));
  
  // Test cases
  console.log(maskEmail("apple.pie@example.com"));      // a*******e@example.com
  console.log(maskEmail("freecodecamp@example.com"));  // f**********p@example.com
  console.log(maskEmail("info@test.dev"));             // i**o@test.dev
  console.log(maskEmail("user@domain.org"));           // u**r@domain.org