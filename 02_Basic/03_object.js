// singleton   or literals  

// Object.create

// object literals

const mySym = Symbol("key1");                       // object symbol {}

const JsUser = {
  name: "Bittu",
  "full name": "Bittu kumar prajapati",                     // use the variable name and square bracket look down the console 
  [mySym]: "mykey1",                                // [] it is represent the symbol 
  age: 18,
  location: "Jaipur",
  email: "bittu@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "bittu@chatgpt.com";
// Object.freeze(JsUser)                       // freeze method used the after no chage or modification in the object
JsUser.email = "bittu@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {                         // define the function 
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {                       // define the function and use the object
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());
