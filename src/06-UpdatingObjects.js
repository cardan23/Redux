//Updating objects

//Object
const person = { name: "Jonh"};

//Creating an empty object and assigning all properties from one to the new emty Object
const updatedObject = Object.assign({}, person, { name: "Bob", age: 30});

//Copying object and assigning all properties from one to new object
//see spread operator in javascript, reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const updatedObjectSpreadOperator = {...person, name: "Paul"};


console.log(updatedObject);
console.log(updatedObjectSpreadOperator);

//Update immutable objects inside objects
const person2 = 
{ 
    name: "Jonh",
    address: {
        City: "New York"
    }
};

//Copying in a deep way the object inside the object
const person2Updated = 
{
    //spread operator for main object
    ...person2, 
    address: 
    {
        //spread operator for nested object
        ...person2.address,
        City: "San Francisco"
    }
};

console.log(person2);
console.log(person2Updated);