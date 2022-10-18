//Creating a reducer

//this is a way to impport action types, one by one with specific names
//import {BUG_ADDED, BUG_REMOVE } from "./07-actionTypes";

//this is another way to import all action types
import * as actions from "./actionTypes";

let lastId = 0;

function reducer(state = [], action){
    if(action.type === actions.BUG_ADDED){
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    }

    else if(action.type === actions.BUG_REMOVED){
        return state.filter(bug => bug.id !== action.payload.id);
    }

    else if(action.type === actions.BUG_RESOLVED){
        return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});
    }

    return state;
}

//Same above logic just changing if else statements by swith statement
function reducerSwitch(state = [], action){

    switch(action.type){
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
}

export default reducer;