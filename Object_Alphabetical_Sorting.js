const Data = [
    { 
        fname: "John", 
        lname: "Reyes", 
        age: 18 
    },
    { 
        fname: "Alice", 
        lname: "Smith", 
        age: 24 
    },
    { 
        fname: "Michael", 
        lname: "Johnson", 
        age: 30 
    },
    { 
        fname: "Emily", 
        lname: "Davis", 
        age: 22 
    },
    { 
        fname: "David", 
        lname: "Martinez", 
        age: 27 
    },
    { 
        fname: "Sophia", 
        lname: "Lopez", 
        age: 19 
    },
    { 
        fname: "James", 
        lname: "Gonzalez", 
        age: 25 
    },
    { 
        fname: "Olivia", 
        lname: "Perez", 
        age: 23 
    },
    { 
        fname: "Ethan", 
        lname: "Harris", 
        age: 21 
    },
    { 
        fname: "Isabella", 
        lname: "Clark", 
        age: 26 
    }
];

// Arranging alphabetically by last name
var arranged_last_name = [...Data].sort((a, b) => a.lname.localeCompare(b.lname));
console.log("Arranged by last name: ");
arranged_last_name.forEach(person => {
    console.log(`${person.lname}, ${person.fname}`);
})
console.log("-------------------------------------------------\n")

// Arranging alphabetically by first name
var arranged_last_name = [...Data].sort((a, b) => a.fname.localeCompare(b.fname));
console.log("Arranged by first name: ");
arranged_last_name.forEach(person => {
    console.log(`${person.fname} ${person.lname}`);
})
console.log("-------------------------------------------------\n")

// Arranging alphabetically by age
var arranged_last_name = [...Data].sort((a, b) => a.age - b.age);
console.log("Arranged by age (From youngest to oldest): ");
arranged_last_name.forEach(person => {
    console.log(`${person.fname} : ${person.age}`);
})
console.log("-------------------------------------------------\n")