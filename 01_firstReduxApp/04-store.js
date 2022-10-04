//Crerating the store

import { createStore } from 'redux';
import reducer from './03-creatingAReducer';

const store = createStore(reducer);

export default store;