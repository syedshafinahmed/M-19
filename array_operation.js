function sumOfNumbers(_numbers){
    let sum = 0;
    for(let number of _numbers){
        sum += number;
        number++;
    }
    return sum;
}
let add = sumOfNumbers([11, 22]);
console.log(add);