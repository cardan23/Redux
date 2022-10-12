
//Creating a custom store function and dispatching actions

//importing the reducer
import reducer from "../01_firstReduxApp/03-creatingAReducer";

//We are adding the reducer as parameter
function createStore(reducer){
    
    let state;

    //Adding dispatching function with action as parameter
    function dispatch(action){
        //1. Call the reducer to get the new state (we will focus just into this point for now)
        //2. Notify the suscribers (we will check this later)

        state = reducer(state, action);

    }

    function getState(){
        return state;
    }

    return{
        getState,
        dispatch
    }
}

export default createStore(reducer);

