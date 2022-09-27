
//1.Write code in a functional style to convert the input to the output: 

import { compose } from 'lodash/fp';
    //input = { tag: "JAVASCRIPT" } 
    //output = "(javascript)"


//Answer

let toLowerCase = str => str.toLowerCase();
let addingParentesis = str => `(${str})`;
let inputFunction = obj => obj.tag;

let result = toLowerCase(addingParentesis(inputFunction({ tag: "JAVASCRIPT" })));

//showing result
console.log(result);


//Using lodash library (compose object)
const transformCompose = compose(toLowerCase, addingParentesis, inputFunction);
const resultCompose = transformCompose({ tag: "JAVASCRIPT" });
console.log(resultCompose);
