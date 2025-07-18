// Task: Basic TypeScript Setup & Types
// Objective: Practice basic TypeScript syntax and type annotations.

// Instructions:

// Create a file simple.ts with:

// A number variable for age.

// A string variable for name.

// Add:

// A boolean variable for isStudent.

// A tuple for coordinates [number, number].

// Write a function greet(name: string) that returns "Hello, [name]!".

// Compile and run the code.

// number variable
let age: number = 25;

// string variable
let fullname: string = "Ndubuisi";

// boolean variable
let isStudent: boolean = true;

// tuple for coordinates
let coordinates: [number, number] = [10, 20];

//  greet function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// print output
console.log(greet(fullname));
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Coordinates:", coordinates);

// Task: Enums, Functions, and Objects
// Objective: Use enums, typed functions, and objects.

// Instructions:

// Create an enum to represent user roles: Student, Teacher, and Admin.

// Create a Person object type (interface) with:

// name (string),

// age (number),

// role (the enum type you created).

// Write a function describePerson(person: Person): string that returns a sentence like:
// "[name] is [age] years old and is a [role]."

// Create two different Person objects and print out their descriptions using the function.

// Compile and run to see the output.


// 1. Create an enum for roles
enum Role {
    Student = "Student",
    Teacher = "Teacher",
    Admin = "Admin"
}

// 2. Create an interface for Person
interface Person {
    name: string;
    age: number;
    role: Role;
}

// 3. Create a function to describe a person
function describePerson(person: Person): string {
    return `${person.name} is ${person.age} years old and is a ${person.role}.`;
}

// 4. Create two Person objects
const person1: Person = {
    name: "Gabriel",
    age: 30,
    role: Role.Teacher
};

const person2: Person = {
    name: "Mark",
    age: 22,
    role: Role.Student
};

// 5. Print the output
console.log(describePerson(person1));
console.log(describePerson(person2));