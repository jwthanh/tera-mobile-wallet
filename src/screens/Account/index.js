/**
 * @format
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './styles';
import AccountList from './AccountList';

class Account extends React.Component {
  static navigationOptions = {
    title: 'Tera Wallet',
    headerRight: (<Icon style={{ paddingHorizontal: 8 }} name="plus" size={30} />),
  };

  state = {};

  render(): React.ReactNode {
    return (
      <View style={styles.root}>
        <AccountList />
      </View>
    );
  }
}

export default Account;
