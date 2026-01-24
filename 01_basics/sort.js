let str=["ramesh","pankaj", "mohan", "sohan"]

str.sort(customSort)

function customSort(a,b){
    if(a<b){
        return 1;
    }
    else{
        return -1;
    }
}

console.log(str)