/**
 *
 * @format
 * @flow
 * */
import { all } from 'redux-saga/effects';
import tera from './account';

export default function* rootSaga() {
  yield all([...tera]);
}
