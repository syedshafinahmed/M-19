function isEven(number){
    if(number %2 === 0){
        return true;
    }
    else{
        return false;
    }
}


function isOdd(number){
    if(number %2 === 1){
        return true;
    }
    return false;
}

console.log(isEven(5));
console.log(isEven(50));
console.log(isOdd(5));
console.log(isOdd(50));