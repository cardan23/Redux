
//Creating a custom store function

function createStore(){
    
    //declare a local variable
    let state;

    //declare a local function returning the local variable (getter)
    function getState(){
        return state;
    }

    return{
        //exposing local function to get state variable
        getState
    }
}


//With this way we make the state object immutable and every time we call getState method
//we just return the local state value

export default createStore();

