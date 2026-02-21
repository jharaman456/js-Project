let num = 16;

function factorialCalculator(n) {
  let result = 1;

  for (let i =1;i<=n;i++){
    result *= i;
  }
  
  return result;
}

//call the function with num
let factorial = factorialCalculator(num);

//store the final output message to resultMsg
let resultMsg = `Factorial of ${num} is ${factorial}`;

//Output to console
console.log(resultMsg);