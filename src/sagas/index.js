/**
 *
 * @format
 * @flow
 * */
import type { Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import account from './account';
import wallet from './wallet';

export default function* rootSaga(): Saga {
  yield all([
    ...account,
    ...wallet,
  ]);
}
