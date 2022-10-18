//Action creators


//we create this file to avoid every time we call a dispatch create a complete store object
//with this function we avoid create all the structure and we only send description and 
//just using the structure once with out repeating that code.


//importing our actions, just some strings to identify the change
import * as actions from "./actionTypes";

export function bugAdded(description){
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description,
        }
    };
}

export function bugResolved(id){
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id: id
        }
    };
}