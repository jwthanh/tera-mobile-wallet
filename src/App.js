/**
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './navigation';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(): void {
    SplashScreen.hide();
  }

  render(): React.ReactNode {
    return <AppNavigator />;
  }
}
