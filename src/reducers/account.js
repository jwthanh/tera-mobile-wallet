/**
 *
 * @format
 * @flow
 * */
import {
  TERA_GET_ACCOUNT_BY_PUBLIC_KEY_FAILED,
  TERA_GET_ACCOUNT_BY_PUBLIC_KEY_REQUEST,
  TERA_GET_ACCOUNT_BY_PUBLIC_KEY_SUCCESS,
} from '../actions/account';

type State = {
  items: Array<any>,
  loading: boolean,
  error: any,
}

const initState: State = {
  items: [],
  loading: false,
  error: undefined,
};

const accountReducer = (state: State = initState, action: Object) => {
  switch (action.type) {
    case TERA_GET_ACCOUNT_BY_PUBLIC_KEY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TERA_GET_ACCOUNT_BY_PUBLIC_KEY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        items: action.payload,
      };
    case TERA_GET_ACCOUNT_BY_PUBLIC_KEY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default accountReducer;
