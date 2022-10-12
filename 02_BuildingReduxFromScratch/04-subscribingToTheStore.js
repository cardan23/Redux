
//Creating a custom store function and dispatching actions

//importing the reducer
import reducer from "../01_firstReduxApp/03-creatingAReducer";

//We are adding the reducer as parameter
function createStore(reducer){
    
    let state;
    let listeners = [];

    //creating a subscribe method
    //we just add the listener reveived to an array to be executed just after every action
    function subscribe(listener){
        if(listener){
            listeners.push(listener);
        }
    }

    //Adding dispatching function with action as parameter
    function dispatch(action){
        //1. Call the reducer to get the new state (we will focus just into this point for now)
        //2. Notify the suscribers (we will check this later)

        state = reducer(state, action);

        //execute the listeners just before apply the action
        for(let i = 0; i < listeners.length; i ++){
            listeners[i]();
        }
    }

    function getState(){
        return state;
    }

    return{
        getState,
        dispatch,
        subscribe
    }
}

export default createStore(reducer);

