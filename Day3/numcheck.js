// Activity 1 - if else statement

let num = 10;
if(num){
    console.log(`num is positive :${num}`) // 10
}

num = -10;

if(num){
    console.log(num) // not execute
}
else{
    console.log(`num is negative :${num}`)
}

num = 0
if(num){
    console.log(num) // not execute
}
else{
  console.log(`num is :${num}`)
}


let person = 45;
if(person >= 18){
    console.log("person is eligible to vote")
}
else{
   console.log("person is not eligible to vate") 
}


// Activity 2 - nested if else

// Task - largest number

let num1 = 10;
let num2 = 15;
let num3 = 20;
let largestNumber;

if(num2 > num1){
    if(num3 > num2){
        largestNumber = num3;
    }
}
console.log(largestNumber)

//Activity - 4 Ternary Operator

let val = 15;
let checkOdd_or_Even = val % 2 === 0 ? console.log("val is Even Number"):console.log("val is Odd Number");
