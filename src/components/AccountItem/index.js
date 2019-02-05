/**
 *
 * @format
 * @flow
 */
import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  data: {
    id: number,
    name: string,
    amount: number,
    currency: string,
  }
}

type State = {

}

class AccountItem extends React.Component<Props, State> {
  state = {};

  render(): React.Node {
    const {
      id, name, amount, currency,
    } = this.props?.data;
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.accountId}>{id}</Text>
          <Text style={styles.accountName}>{name}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyLeft}>
            <Text style={styles.amount}>{amount}</Text>
            <Text style={styles.currencySymbol}>{currency}</Text>
          </View>
          <View style={styles.bodyRight}>
            <Text style={styles.actionBtn}>Set smart</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default AccountItem;
