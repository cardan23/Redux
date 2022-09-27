//Exercise

//We have a recipe object as follows: 

    //recipe = { name: "Spaghetti Bolognese", 
    //           ingredients: ["egg", "salt"] 
    //         } 
    
    
    //Assuming that this object is immutable, write code to  
    
    //-Add a new ingredient ("cream") 
    //-Replace "egg" with "egg white"
    //-Remove an ingredient ("egg")


//Answer


//object
const recipe = { 
    name: "Spaghetti Bolognese", 
    ingredients: ["egg", "salt"]
} 

//1. -Add a new ingredient ("cream") 
const recipeNewIngredient = {
    ...recipe, 
    ingredients: [...recipe.ingredients, "cream"]
};

console.log(recipeNewIngredient);



//2. -Replace "egg" with "egg white"
let indexEgg = recipe.ingredients.indexOf("egg");
const recipeEggWhite = {
    ...recipe, 
    ingredients: recipe.ingredients.map(ingredient =>
        ingredient === "egg" ? "egg white" : ingredient
    )
};

console.log(recipeEggWhite);



//3. -Remove an ingredient ("egg")
const recipeRemoveEgg = {
    ...recipe, 
    ingredients: [
        ...recipe.ingredients.filter(e => e !== "egg")
    ]
};

console.log(recipeRemoveEgg);