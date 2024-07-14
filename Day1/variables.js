//Task 1 - Declare a variable using var keyword, assign number

var num = 8;
console.log(num)

//Task 2 - Declare a variable using var let, assign string

let str = "Baqar Ali"
console.log(str);
//Task 3 - Declare a variable using var const, assign string
const checkcondition = true || false;
console.log(checkcondition)

// Task 4 - create variables of differnt data types and log each variable using typeof operator

//Primitive
let numberic = 45;
console.log(typeof numberic) // number

let boolean = true;
console.log(typeof boolean) //Boolean
let nodefine = undefined;
console.log(typeof nodefine)// undefined
let empty = null;
console.log(typeof empty)// object

let str2 = "ali baqar";
console.log(typeof str2) //string
let symbolic = Symbol("sfnsf");
console.log(typeof symbolic)//symbol
let largenum = 446464123146n
console.log(typeof largenum)//Bigint

// non-primitive Data type
let obj = {
    name:"Chai aur Code"
}
console.log(typeof obj) // object

function hello(){
    console.log("hello world")
}
console.log(typeof hello) // function

let arr = [1,2,3,4,5,6];
console.log(typeof arr) // object

//Task 5 - Declare a variable using  let, assign it an initial value and reassign

let chai = 10;
console.log(chai) // 10
chai = 25;
console.log(chai) // 25

//Task 6 - Declare a variable using  const, assign it an initial value and reassign
const code = 25;
code = "baqar";
// console.log(code); //typeError: Assignment to a const variable

// Feature Request