/**
 *
 * @format
 * @flow
 * */
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

class NewAccount extends React.Component {
  static navigationOptions = {
    title: 'New Account',
  }

  state = {};

  render(): React.ReactNode {
    return (
      <View style={styles.root} />
    );
  }
}

export default NewAccount;
