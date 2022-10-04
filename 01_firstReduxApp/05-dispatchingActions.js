//Dispatching actions

import store from "./04-store";
import * as actions from "./07-actionTypes";

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