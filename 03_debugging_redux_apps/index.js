
import store from "./store";
import * as actions from "./actionCreators";

//calling subscribe method
//subscribing before dispatch some event
store.subscribe(() => {
    console.log("store changed!");
});

//calling custom dispatch from our custom store
store.dispatch(actions.bugAdded("bug 12345"));
store.dispatch(actions.bugAdded("bug 12346"));
store.dispatch(actions.bugAdded("bug 12347"));
store.dispatch(actions.bugAdded("bug 12348"));
store.dispatch(actions.bugResolved(1));
console.log(store.getState());