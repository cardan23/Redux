//Understanding Currying

//normal function with two parameters
function add(a, b){
    return a + b;
}

//currying is a tecnique to get N parameters and convert to a function with one single parameter
//N => 1

//Converting function with 2 parameters to curry function (one single parameter)
function addCurryFunction(a){
    
    //returning a new function with new parameter
    return function(b){
        return a + b;
    }
}

//Same curry tecnique with arrow function
const addCurryArrowFunction = a => b => a + b;

//Calling function with curry tecnique
addCurryFunction(5)(4); //--> result will be 9 
addCurryArrowFunction(5)(4)//-->same result will be 9 