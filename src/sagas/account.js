/**
 *
 * @format
 * @flow
 * */
import { put, call, takeLatest } from 'redux-saga/effects';
import * as TeraLib from '../vendor/tera-libs';
import {
  TERA_GET_ACCOUNT_BY_PUBLIC_KEY_FAILED,
  TERA_GET_ACCOUNT_BY_PUBLIC_KEY_REQUEST,
  TERA_GET_ACCOUNT_BY_PUBLIC_KEY_SUCCESS,
} from '../actions/account';


function* getAccountsByPublicKey(action) {
  try {
    const result = yield call(TeraLib.restful.getAccountsByPublicKey, action.payload.publicKey);
    yield put({ type: TERA_GET_ACCOUNT_BY_PUBLIC_KEY_SUCCESS, payload: result.data.arr });
  } catch (e) {
    yield put({ type: TERA_GET_ACCOUNT_BY_PUBLIC_KEY_FAILED, error: e });
  }
}

export default [takeLatest(TERA_GET_ACCOUNT_BY_PUBLIC_KEY_REQUEST, getAccountsByPublicKey)];
