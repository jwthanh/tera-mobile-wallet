/**
 *
 * @format
 * @flow
 * */
import * as walletActions from '../actions/wallet';

type State = {
  privateKey: string | any,
  publicKey: string | any,
  loading: boolean,
  error: any,
};

const initialState: State = {
  privateKey: undefined,
  publicKey: undefined,
  loading: false,
  error: undefined,
};

const walletReducer = (state: State = initialState, action: Object) => {
  switch (action.type) {
    case walletActions.TERA_WALLET_GENERATE_NEW_KEY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case walletActions.TERA_WALLET_GENERATE_NEW_KEY_SUCCESS: {
      const { privateKey, publicKey } = action.payload;
      return {
        ...state,
        privateKey,
        publicKey,
        loading: false,
        error: undefined,
      };
    }
    case walletActions.TERA_WALLET_GENERATE_NEW_KEY_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state;
  }
};

export default walletReducer;
