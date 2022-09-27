// Pure functions

// reference take it from: https://www.geeksforgeeks.org/pure-functions-in-javascript/

// Explanation:

// 	A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
// 	It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

// 	Also a pure function does not produce any observable side effects such as network requests or data mutation etc.

// 	Let’s see the below JavaScript Function:

	function calculateGST( productPrice ) {
    		return productPrice * 0.05;
	}


	// The above function will always return the same result, if we pass the same productPrice. 
	// In other words, its output doesn’t get affected by any other values / state changes. 
	// So we can call “calculateGST” function a Pure Function.


// Now, let’s see one more function below:
	
	var tax = 20;
	function calculateGST( productPrice ) {
    		return productPrice * (tax / 100) + productPrice;
	}

    // Pause a second and can you guess whether the above function is Pure or not ?

	// If you guessed that it is isn’t, you are right! It is not a pure function as the output is dependent on an external variable “tax”.
	// So if the tax value is updated somehow, then we will get a different output though we pass the same productPrice as 
	// a parameter to the function.

	// Note: If a pure function calls a pure function, this isn’t a side effect and the calling function is still considered pure. 
	// (Example: using Math.max() inside a function)