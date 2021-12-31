import { combineReducers } from 'redux';
import counterReducer from './counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
