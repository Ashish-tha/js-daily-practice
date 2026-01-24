function hello(n,func){
    console.log(n,func)
    func() // Errror
}

let greet=()=>{
    console.log(hello)
    return 100;
}
let n=7
hello(n,greet())