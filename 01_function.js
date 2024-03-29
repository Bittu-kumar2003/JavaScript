function sayMyName() {
  // define a function  name
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()                          // it's called name is refernce

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2; // return keyword used because no run line of code run after the  write return keyword
}

const result = addTwoNumbers(3, 5); //(3,5) called arugment

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
// detail  in the function
function calculateCartPrice(val1, val2, ...num1) {
  // ... is another name is rest operator use the  all value print
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  // create a one object
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  // create  a function and pass the obeject value
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)                   // parameter call the object and also pass the object name
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600]; // create a array

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // parameter call the array  and also pass the array name
