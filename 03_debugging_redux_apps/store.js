//Crerating the store

import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';

//Adding an extra parameter for redux developer tools.
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );


//Store with trace
//replacing 2nd parameter by "devToolsEnhancer" function and enabling the trace option
const store = createStore(
    reducer,
    devToolsEnhancer({ trace: true})
    );

export default store;