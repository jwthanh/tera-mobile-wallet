/**
 *
 * @format
 * @flow
 * */
import { combineReducers } from 'redux';
import account from './account';
import wallet from './wallet';

const rootRecuder = combineReducers({
  account,
  wallet,
});

export default rootRecuder;
