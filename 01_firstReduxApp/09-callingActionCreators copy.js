
import store from "./04-store";
import { bugAdded } from "./08-actionCreators";

//calling action creator "bugAdded" to avoid create the object in every call from "dispatch" function
//with this we reduce code on every call to dispatch
store.dispatch(bugAdded("bug added"));

console.log(store.getState());