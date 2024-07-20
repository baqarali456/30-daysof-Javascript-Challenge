// create array 1 to 5 number

let numbers = [1,2,3,4,5];
console.log(numbers);

// access first and last element
console.log(numbers[0])
console.log(numbers[numbers.length - 1])

// add number using push

numbers.push(6)
console.log(numbers) // [1,2,3,4,5,6]
numbers.pop()
console.log(numbers) // [1,2,3,4,5]
numbers.shift()
console.log(numbers) // [2,3,4,5]
numbers.unshift(1)
console.log(numbers) // [1,2,3,4,5]
