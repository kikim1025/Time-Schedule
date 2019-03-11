import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;

/*import Actions from './actions';
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(Actions.addSchedule('Learn about actions'));
unsubscribe();*/ 