/**
 *
 * @format
 * @flow
 * */
import type { Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import tera from './account';

export default function* rootSaga(): Saga {
  yield all([...tera]);
}
