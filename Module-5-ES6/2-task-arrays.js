// Vanilla JavaScript

// task 1 : return only odd numbers..
let numbers = [1, 2, 3, 4, 5];
for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
    }
}
console.log(numbers); // Output: [1, 3, 5]

// task 2: filter the name only..

let people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
];

let filteredPeople = [];
for (let i = 0; i < people.length; i++) {
    let name = people[i].name ;
    filteredPeople.push(name);
}
console.log(filteredPeople);
