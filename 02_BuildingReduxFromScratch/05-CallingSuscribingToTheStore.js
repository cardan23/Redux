//Calling subscribing to the store

import store from "./04-subscribingToTheStore";
import * as actions from "./01_firstReduxApp/08-actionCreators";

//calling subscribe method
//subscribing before dispatch some event
store.subscribe(() => {
    console.log("store changed!");
});

//calling custom dispatch from our custom store
store.dispatch(actions.bugAdded("bug 12345"));
console.log(store.getState());