/**
 *
 * @format
 * @flow
 * */
import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {

}

type State = {

}

class NewWallet extends React.Component<Props, State> {
  state = {};

  render(): React.Node {
    return (
      <View style={styles.root}>
        <Text>Private Key</Text>
      </View>
    );
  }
}

export default NewWallet;
