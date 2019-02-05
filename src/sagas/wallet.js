/**
 *
 * @format
 * @flow
 * */
import { put, takeLatest } from 'redux-saga/effects';
import * as TeraLib from '../vendor/tera-libs';
import * as walletActions from '../actions/wallet';

function* generateNewKeyPairs() {
  try {
    const privateKey = TeraLib.NewPrivateKey();
    const publicKey = TeraLib.NewPublicKey(privateKey);
    yield put({
      type: walletActions.TERA_WALLET_GENERATE_NEW_KEY_SUCCESS,
      payload: { privateKey, publicKey },
    });
  } catch (e) {
    yield put({ type: walletActions.TERA_WALLET_GENERATE_NEW_KEY_FAILED, error: e });
  }
}

export default [takeLatest(walletActions.TERA_WALLET_GENERATE_NEW_KEY_BEGIN, generateNewKeyPairs)];
