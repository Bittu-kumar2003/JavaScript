 // COde pratice golable scope and block scope

//var c = 300
let a = 300;                     // golable scope
if (true) {                      // block scope 
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++
   

// define the function in the  different -different way (noramal decalre and another declare with expression )
console.log(addone(5));

function addone(num) {
  return num + 1;
}

//addTwo(5);         // show the error because error not define the addTwo in the above of the expression 
const addTwo = function (num) {              // addTwo is the expression show in the function 
  return num + 2;
};
console.log(addTwo(5));    
