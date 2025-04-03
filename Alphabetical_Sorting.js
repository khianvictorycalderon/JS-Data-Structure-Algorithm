var alphabet = ["A", "C", "B", "E", "V", "Z", "S", "X"];
console.log(`Unarrange data: ${alphabet}`);

// we want to arrange it alphabetically:
var arranged_alphabet = alphabet.sort((a, b) => a.localeCompare(b));
console.log(`Arranged data: ${arranged_alphabet}`);