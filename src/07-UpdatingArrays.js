//Worning with arrays, Updating arrays

//Main array
const numbers = [1 ,2, 3];

//Adding elements
const addingEnd = [...numbers, 4, 5];
const addingFirst = [-1, 0, ...numbers];


//Adding middle
const index = numbers.indexOf(2);
const addingIndex = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];

//Removing
const removed = numbers.filter(n => n !== 2);

//Updating
const updated = numbers.map(n => n === 2 ? 20 : n);