// primitive data types in JavaScript
//7 primitive data types :
// string, number, boolean, null, undefined, symbol(unique), bigint


// Reference type : (non-primitive data type)

// object, array, function


const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;

let userEmail;

const id=Symbol("123");
const anotherId=Symbol(123);

// console.log(id===anotherId);

const bigNumber=1234567890123456789012345678901234567890n;


const heros=["shakti","krishna","arjun"];

let myObj={
    name:"ashish",
    age:24,
}



    const myFunction=function (){
        cons1ole.log("hello world");
    }

// console.log(typeof myFunction);

// console.log(typeof bigNumber);

// All non-primitive data tyopes is return object in JavaScript


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Satck (Primitive), Heap memory(non-primitive) 

let myChaneel="ashishyoutube";
let anotherChaneel=myChaneel;

anotherChaneel="ashish tech";

// console.log(myChaneel);
// console.log(anotherChaneel);

let userOne={
    email:"user.gmail.com",
    upi:"upi@ybl"   
}

let userTwo=userOne;
userTwo.email="user2.gmail.com";

console.log(userOne.email);
console.log(userTwo.email);