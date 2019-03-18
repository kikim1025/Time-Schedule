import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// create redux store and apply middleware
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;