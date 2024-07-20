
let nums = [1,2,3,4,5,6];

// map

let doublednums = nums.map(ele=>ele * 2);
console.log(doublednums);

// filter

let findevenNo = nums.filter(ele=>ele % 2 === 0)
console.log(findevenNo);

// reduce

let sumofallNumbers = nums.reduce((acc,it)=>acc + it,0)
console.log(sumofallNumbers);


