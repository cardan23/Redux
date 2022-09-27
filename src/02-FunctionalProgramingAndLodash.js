//import lodash and understanding the behavior of this new way

import {compose, pipe } from 'lodash/fp';


    let input = "    JAVASCRIPT     ";
    let output = "<div>" + input.trim() + "</div>";

    //Functional Programming (reusable and scalable code)
    const trim = str => str.trim();
    const wrapInDiv = str => `<div>${str}</div>`;
    const toLowerCase = str => str.toLowerCase();

    //Problem
    //const result = wrapInDiv(toLowerCase(trim(input)));
    //with bellow solution we don't have a lot of parentesis and we read one function either
    
    //Solution
    //using compose function
    //this takes the bunch of a functions and returns a new function with the composition of all in one
    const transformCompose = compose(wrapInDiv, toLowerCase, trim);
    transformCompose(input);

    //Solution
    //Same solution but with pipe, same case just different order into parameters (right to left)
    const transformPipe = pipe(trim, toLowerCase, wrapInDiv);
    transformPipe(input);

    
