var alphanumerical = ["A", 0, "P", "C", 12, "E", 3, "X", "Y", 3, "S", 2, "X", 1];
console.log(`Unarranged data: ${alphanumerical}`);

// Arrange numbers (0-9) first, followed by letters
var arranged_number_letter = alphanumerical.sort((a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else if (typeof a === 'number') {
    return -1; // numbers come first
  } else if (typeof b === 'number') {
    return 1;  // numbers come first
  } else {
    return a.localeCompare(b);  // letters come after numbers
  }
});
console.log(`Arranged number first: ${arranged_number_letter}`);

// Arrange letters (a-z) first, followed by numbers
var arranged_letter_number = alphanumerical.sort((a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);  // letters come first
  } else if (typeof a === 'string') {
    return -1; // letters come first
  } else if (typeof b === 'string') {
    return 1;  // letters come first
  } else {
    return a - b;  // numbers come after letters
  }
});
console.log(`Arranged letter first: ${arranged_letter_number}`);