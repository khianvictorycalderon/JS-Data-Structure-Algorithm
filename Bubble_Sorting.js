var numbers = [1, 20, 9, 50, 12, 13, 29, 30, 4, 6, 8, 7];
console.log(`Unarranged numbers: ${numbers}`);

// we want to arrange it from smallest to biggest
var arranged_numbers = numbers.sort((a, b) => a - b);
console.log(`Arranged numbers: ${arranged_numbers}`);