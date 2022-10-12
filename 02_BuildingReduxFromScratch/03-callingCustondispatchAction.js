//Dispatching actions

import store from "./02-dispatchingActions";
import * as actions from "./01_firstReduxApp/08-actionCreators";

//calling custom dispatch from our custom store
store.dispatch(actions.bugAdded("bug 12345"));
console.log(store.getState());