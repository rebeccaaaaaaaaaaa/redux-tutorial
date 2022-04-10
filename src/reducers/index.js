import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';

//Caso sua aplicação possua vários reducers, 
//você pode combiná-los para enviá-los à 
//Store da seguinte forma, usando o método combineReducers.
export const Reducers = combineReducers({
  clickState: clickReducer,
});