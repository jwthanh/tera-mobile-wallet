/**
 * @format
 * @flow
 */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './styles';
import AccountList from './AccountList';

const rightNavButton = (navigation: Object) => (
  <TouchableOpacity onPress={() => navigation.navigate('NewAccountStackModal')}>
    <Icon style={{ paddingHorizontal: 8 }} name="plus" size={30} />
  </TouchableOpacity>
);

class Account extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Tera Wallet',
    headerRight: rightNavButton(navigation),
  });

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
