
// For Each Method........


// let myArr=[12,23,25,26,27]
// myArr.forEach((item,i)=>{
// console.log(item+"items"+ i + "index")
// })




// Map Method.........


// let myArr=[12,23,25,26,27]
// const arr=myArr.map((item,i)=>{
// console.log(item+"items"+ i + "index")
// })

// console.log(arr)



// Filter Method.......

// let arr=[1,3,5,4,6];
// let filterArr=arr.filter((item,i)=>{
//     if(i%2==0){
//         return true;
//     }
// })

// console.log(filterArr)




// Sort function

// let arr=[5,9,10,2,3,4]
// let sorted=arr.sort((a,b)=>{
//     return a-b; // sort in assending
//     return b-a; // sort in descending
// })

// console.log(sorted)



// Reduce Iterator method........

let arr=[155,145,165,125,198]
let sortedArr=arr.reduce((T=0,i)=>{
    if(i>T){
        T=i;
    }
    return T;
})

console.log(sortedArr)