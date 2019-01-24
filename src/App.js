/**
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';


import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './navigation';
import * as TeraLibs from './vendor/tera-libs';
import configureStore from './stores/configureStore';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);


type Props = {};
export default class App extends Component<Props> {
  componentDidMount(): void {
    SplashScreen.hide();
    const privateKey = TeraLibs.NewPrivateKey();
    const publicKey = TeraLibs.NewPublicKey(privateKey);
    console.log(privateKey);
    console.log(publicKey);
  }

  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
