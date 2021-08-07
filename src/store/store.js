import {createStore, combineReducers} from 'redux';
import data from './fetchData/reducer'

const reducers = combineReducers({
    data,
  });
  
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
export default store;