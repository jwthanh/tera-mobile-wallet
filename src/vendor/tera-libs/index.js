/**
 *
 * @format
 * @flow
 * */
import '../../../shim';
import CryptoJS from 'crypto-js';
import secp256k1 from 'secp256k1/elliptic';

import * as restfulLib from './restful';

export const restful = restfulLib;

export const NewPrivateKey = (): string => CryptoJS.enc.Hex.stringify(
  CryptoJS.SHA3(CryptoJS.lib.WordArray.random(32), { outputLength: 256 }),
).toUpperCase();

export const NewPublicKey = (privateKey: string): string => {
  const buffer = Buffer.from(privateKey, 'hex');
  return secp256k1
    .publicKeyCreate(buffer, true).toString('hex').toUpperCase();
};
