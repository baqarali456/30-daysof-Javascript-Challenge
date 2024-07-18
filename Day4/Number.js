// Number Print from 1 to 10;
for(let i = 1;i <= 10;i++){
    console.log(`The number is ${i} in for loop`)
}

let i = 1;
while (i <= 10) {
    console.log(`The number is ${i} in while loop`)
    i++;
}

// print number from 1 to 10 but skip the 5 number

for(let i =1;i<=10;i++){
    if(i === 5) continue;
    console.log(`The number is ${i}`)
}

// print number from 1 to 10 but stop the loop when 7 number come

for(let i =1;i<=10;i++){
    console.log(`The number is ${i}`)
    if(i === 7) break;
}


