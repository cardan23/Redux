//understanding functional programing

//in javascript we can get a function as parameter and return a value or even another function
//Example....

    //NOT functional programming
    let input = "    JAVASCRIPT     ";
    let output = "<div>" + input.trim() + "</div>";

    //Functional Programming (reusable and scalable code)
    const trim = str => str.trim();
    const wrapInDiv = str => `<div>${str}</div>`;
    const toLowerCase = str => str.toLowerCase();

    //We have a problem with this, first we have a lot of parentesis and second we need to read function
    //from left to right, to avoid this we need to install lodash package and improve it
    const result = wrapInDiv(toLowerCase(trim(input)));
    console.log(result);
