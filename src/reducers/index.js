/**
 *
 * @format
 * @flow
 * */
import { combineReducers } from 'redux';
import account from './account';

const rootRecuder = combineReducers({
  account,
});

export default rootRecuder;
