let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1

//console.log(numbers)

//2

let total = 0;

for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
//console.log(total)

//3

console.log (total / numbers.length)

//4

if (total > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

//5

numbers = numbers.sort((a, b) => b-a);

for (i2 = 0; i2 < numbers.length; i2++) {
    if (numbers[i2] >= 1) {
    }
}
console.log(numbers[0])