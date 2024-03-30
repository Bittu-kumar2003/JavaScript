const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // This keyword show the currently work
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {                // declarre the function but work properly
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
  // used the arrow function
  let username = "hitesh";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                   // called exmplicity return
// }

// const addTwo = (num1, num2) =>  num1 + num2

 const addTwo = (num1, num2) => ( num1 + num2 )            // called implicity return

//const addTwo = (num1, num2) => ({ username: "hitesh" });    // object define  in the arrow funtion but declare  in the parethesis

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
