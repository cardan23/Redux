import {compose, pipe } from 'lodash/fp';

    //Problem
    //we want to reuse the wrapInDiv function, not only for div element. We want to use it for span, text, div, etc.
    // we need to use curry tecnique to resolve it because we are going to add a new parameter to wrap function.
    //so we are going to convert a function that gets 2 parameters to one single parameter and same behavior. 


    let input = "    JAVASCRIPT     ";
    let output = "<div>" + input.trim() + "</div>";

    //Functional Programming (reusable and scalable code)
    const trim = str => str.trim();

    //Step 1
    //Changing name funciton to wrap (generic name), Add new parameter, 
    //const wrap = (type, str) => `<div>${str}</div>`;

    //Step 2
    //we still have a problem, we cannot have two parameters and compose only receive functions
    //lets transform wrap wit curry tecnique
    const wrap = type => str => `<${type}>${str}</${type}>`;
    const toLowerCase = str => str.toLowerCase();

    //Now we can send new "type" parameter and call wrap function
    const transformCompose = compose(wrap("span"), toLowerCase, trim);
    transformCompose(input);

    const transformPipe = pipe(trim, toLowerCase, wrap("span"));
    transformPipe(input);

    
