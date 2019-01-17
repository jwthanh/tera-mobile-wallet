/**
 * @format
 * @flow
 */
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class Account extends React.Component {
  state = {};

  render(): React.ReactNode {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Tera Mobile Wallet!</Text>
        </View>
      </View>
    );
  }
}

export default Account;
