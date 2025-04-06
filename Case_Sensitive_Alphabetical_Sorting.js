var alphabet = ["A", "b", "C", "P", "q", "r", "a", "C", "t", "Y", "y", "T"];
console.log(`Unarranged data: ${alphabet}`);

// 1. "A", "a"
var sorted_A_a = alphabet.sort((a, b) => {
  if (a.toUpperCase() === b.toUpperCase()) {
    return a.localeCompare(b);  // Order by case if letters are the same (uppercase before lowercase)
  }
  return a.toUpperCase().localeCompare(b.toUpperCase()); // Ensure uppercase letters come before lowercase
});
console.log(`Sorted A, a: ${sorted_A_a}`);

// 2. "A", "B", "a", "b"
var sorted_A_B_a_b = alphabet.sort((a, b) => {
  if (a.toUpperCase() === b.toUpperCase()) {
    return a.localeCompare(b); // Order by case if letters are the same (lowercase comes after uppercase)
  }
  return a.toUpperCase().localeCompare(b.toUpperCase()); // Ensure case-insensitive sorting
});
console.log(`Sorted A, B, a, b: ${sorted_A_B_a_b}`);

// 3. "B", "b"
var sorted_B_b = alphabet.sort((a, b) => {
  if (a.toUpperCase() === b.toUpperCase()) {
    return b.localeCompare(a);  // Reverse the order if letters are the same (uppercase after lowercase)
  }
  return b.toUpperCase().localeCompare(a.toUpperCase()); // Ensure uppercase letters come after lowercase
});
console.log(`Sorted B, b: ${sorted_B_b}`);

// 4. "a", "b", "A", "B"
var sorted_a_b_A_B = alphabet.sort((a, b) => {
  if (a.toLowerCase() === b.toLowerCase()) {
    return a.localeCompare(b);  // Order by case if letters are the same (lowercase comes first)
  }
  return a.toLowerCase().localeCompare(b.toLowerCase()); // Ensure case-insensitive sorting
});
console.log(`Sorted a, b, A, B: ${sorted_a_b_A_B}`);
