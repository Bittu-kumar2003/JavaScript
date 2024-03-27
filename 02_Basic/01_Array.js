// array      (It is a object )

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)      // Push(means element add in the last of the array)
// myArr.push(7)
// myArr.pop()        // Pop(means element remove in the last of the array)

// myArr.unshift(9)   // unshift(means element add in the index  of the array)
// myArr.shift()      // shift(means element remove  in the index  of the array)

// console.log(myArr.includes(9));    // include ( give the answer in the boolean type respone means(true or false))
// console.log(myArr.indexOf(3));     // element donot exit in the array then give the output (-1) else element exit in the array then  give the
// index value

// const newArr = myArr.join()         // join convert the string in the previous array check ( typeof newArr)

// console.log(myArr);
// console.log( newArr);

// slice, splice       (Interview type question )

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
