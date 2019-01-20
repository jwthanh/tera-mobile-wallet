/**
 *
 * @format
 * @flow
 * */
import React from 'react';
import { FlatList } from 'react-native';
import AccountItem from '../../../components/AccountItem';

const accountListData = [{ id: 0, name: 'Tera 1' }, { id: 1, name: 'Tera 2' }, { id: 2, name: 'Tera 3' }, { id: 3, name: 'Tera 3' }];

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
