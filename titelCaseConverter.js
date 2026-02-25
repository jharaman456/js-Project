function titleCase(str) {
    return str.split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(" ");
}

console.log(titleCase("I like to code")); 
// "I Like To Code"

console.log(titleCase("javaScript is fun")); 
// "Javascript Is Fun"

console.log(titleCase("Web Development Is Awesome")); 
// "Web Development Is Awesome"
