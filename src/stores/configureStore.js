/**
 *
 * @format
 * @flow
 * */
import production from './configureStore.prod';
import development from './configureStore.dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = production;
} else {
  module.exports = development;
}
