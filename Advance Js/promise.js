// let myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("google search is here")
//     },3000);
// });

// console.log(myPromise, "promise started")

// myPromise.then((data)=>{
//     console.log("my promise resolved",data)
// })
// .catch((err)=>{
//     console.log("promise rejected",err)
// })

// // console.log(myPromise)


// Closure..........


// function main()
// {
//     let myName ="ashish"
// function outerFunc(){
    

// function getName(){
//     console.log("name is "+ myName)
// }

// getName()

// }

// outerFunc()

// }

// main()



// call method...........


let obj1={
    firstName:"ashish",
    lastName:"gaur",

    getFullName: function(age){
        return this.firstName+ " "+ this.lastName+" "+ age;
    }

}

// console.log(obj1.firstName)

let obj2={
    firstName: "rakesh",
    lastName: "kumar",
}

// console.log(obj1.getFullName.call(obj2,22))
// console.log(obj1.getFullName.apply(obj2,[22]))
let newFunction=obj1.getFullName.bind(obj2,22)
console.log(newFunction())
