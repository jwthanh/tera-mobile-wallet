/**
 *
 * @format
 * @flow
 * */
import axios from 'axios';

const teraInstance = axios.create({
  baseURL: 'https://terafoundation.org',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export function* getAccountsByPublicKey(publicKey: string) {
  try {
    return yield teraInstance.get(`/GetAccountListByKey?AllData=0&Key=${publicKey}`);
  } catch (e) {
    throw e;
  }
};

export const temp = {};
