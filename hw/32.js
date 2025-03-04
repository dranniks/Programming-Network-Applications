let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    average += numbers[i];
}

average /= numbers.length;
console.log(average);