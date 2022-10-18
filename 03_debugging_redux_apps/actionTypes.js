//Action types

//when we dispatch an action this is the flow redux follow

//removing  a bug from store state
// store.dispatch({
//     type: "bugRemoved",
//     payload:{
//         id: 1
//     }
// });
// console.log(store.getState());

//1. Our store is going to call a reducer, based on the given action type we are going to get the new state.

    // state = reducer(state, action);

//2.  Then the it's going to notify the "subscribers" about the change or the update.

//Here we are creating and exporting some strings wich represents some actions we can have on our application
//we use this consts values into other files to avoid 
export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
export const BUG_RESOLVED = "bugResolved";

