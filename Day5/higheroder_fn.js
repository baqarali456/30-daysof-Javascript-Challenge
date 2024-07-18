// Task 9
function add(a,b){
 return a + b;
}
function multiplication(a,b){
 return a * b;
}
function subtract(a,b){
 return a - b;
}

function calculator(a,b,operator){
return operator(a,b)
}
console.log(calculator(4,5,add))

// Task 10

function  highorderFunction(){
  return function first(){
    let a = "baqar"
   return function second(){
        a = "ali"
        return a;
    }
  }
}
console.log(highorderFunction()()())
