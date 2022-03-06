import { combineReducers } from '@reduxjs/toolkit';
import reportsReducer from 'state/reducers/reports';

const rootReducer = combineReducers({
  reports: reportsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
