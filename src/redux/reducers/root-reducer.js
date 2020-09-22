import { combineReducers } from 'redux';
import FloodReducer from './flood.reducer';
import workReducer from './work-reducer';

const RootReducer = combineReducers({
  flood: FloodReducer,
  work: workReducer
})

export default RootReducer