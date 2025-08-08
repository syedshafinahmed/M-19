function sumOffEven(numbers){
    let sum = 0; 
    for(const number of numbers){
        if(number%2 === 0){
            // console.log(number);
            sum += number;
        }
    }
    return sum;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = sumOffEven(numbers);
console.log("Sum is: ",sum);