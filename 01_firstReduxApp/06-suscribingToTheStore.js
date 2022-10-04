//Subscribing to the store

//importing our store
import store from "./04-store";

//importing our actions, just some strings to identify the change
import * as actions from "./07-actionTypes";

//Subscribe method is a listener and we are subscribing to this to be able to see every time the storage changes
//this is important to update our information into UI and show correct updated values
//Every time we add or remove a bug we will se the result on console.
store.subscribe(() => {
    console.log("store changed!", store.getState());
});

//adding a bug into store state
store.dispatch({
    type: actions.BUG_ADDED,
    payload:{
        description: "bug 1"
    }
});

//removing  a bug from store state
store.dispatch({
    type: actions.BUG_REMOVED,
    payload:{
        id: 1
    }
});
console.log(store.getState());