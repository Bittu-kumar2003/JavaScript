// Immediately Invoked Function Expressions (IIFE)

// define:- functionn define immdeiatly
// gloable scope se problem hoti hai variable and declaration kai baar ushko side karne kae liye hum sb iife ka use kiye

(function chai() {         //() this one used the functionn defination  and () this one use the declaration call/ adjucation call
  // named IIFE
  console.log(`DB CONNECTED`);
})(); //; this one very import because it's not there then show the probleam because code don't know when stop there

((name) => {
  // define parameter and without name iife used in the arrow function also used the function
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
