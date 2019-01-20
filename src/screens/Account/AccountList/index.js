/**
 *
 * @format
 * @flow
 * */
import React from 'react';
import { FlatList } from 'react-native';
import AccountItem from '../../../components/AccountItem';

const accountListData = [
  {
    id: 890344, name: 'Tera 1', amount: 302934, currency: 'TERA',
  },
  {
    id: 435993, name: 'Tera 2', amount: 546564, currency: 'TERA',
  },
  {
    id: 233454, name: 'Tera 3', amount: 756765, currency: 'TERA',
  },
  {
    id: 435434, name: 'Tera 3', amount: 765745, currency: 'TERA',
  },
];

class AccountList extends React.Component {
  keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => <AccountItem key={item.id} data={item} />;

  render(): React.ReactNode {
    return (
      <FlatList
        renderItem={this.renderItem}
        data={accountListData}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default AccountList;
