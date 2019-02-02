/**
 *
 * @format
 * @flow
 * */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class NewWallet extends React.Component {
  state = {};

  render(): React.ReactNode {
    return (
      <View style={styles.root}>
        <Text>Private Key</Text>
      </View>
    );
  }
}

export default NewWallet;
