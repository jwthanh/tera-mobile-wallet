/**
 *
 * @format
 * @flow
 * */
import * as React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import AccountItem from '../../../components/AccountItem';
import * as accountActions from '../../../actions/account';

type Props = {
  account: {
    items: Array<any>,
    loading: boolean,
    error: any,
  },
  getAccountsByPublicKey: ({ publicKey: string }) => void,
}

class AccountList extends React.Component<Props> {
  componentDidMount(): void {
    const { getAccountsByPublicKey } = this.props;
    getAccountsByPublicKey({ publicKey: '0249950EC9729631DB60DAD566D25178EB9243D25A367A3CD800EC5761B3B799C3' });
  }

  keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => (
    <AccountItem
      key={item.id}
      data={{
        id: item.Num,
        name: item.Name,
        amount: item.Value?.SumCOIN,
        currency: item.Currency === 0 ? 'TERA' : 'N/A',
      }}
    />
  );

  render(): React.Node {
    const { account } = this.props;
    return (
      <FlatList
        renderItem={this.renderItem}
        data={account.items}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default connect(
  state => ({
    account: state.account,
  }),
  {
    getAccountsByPublicKey: accountActions.getAccountsByPublicKey,
  },
)(AccountList);
