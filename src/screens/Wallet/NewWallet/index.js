/**
 *
 * @format
 * @flow
 * */
import * as React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';

import * as walletActions from '../../../actions/wallet';

import styles from './styles';
import XButton from '../../../components/XButton';

type Props = {
  navigation: Object,
  wallet: {
    privateKey: string,
    publicKey: string,
    loading: boolean,
    error: any,
  },
  generateKeyPairs: () => void,
}

type State = {

}

class NewWallet extends React.Component<Props, State> {
  static navigationOptions = () => ({
    title: 'New Tera Wallet',
  });

  state = {};

  componentDidMount(): void {
    const { generateKeyPairs } = this.props;
    generateKeyPairs();
  }

  render(): React.Node {
    const { wallet, navigation } = this.props;
    const { privateKey, publicKey } = wallet;
    return (
      <View style={styles.root}>
        <Text style={styles.keyLabel}>Private Key</Text>
        <QRCode
          style={styles.qrcode}
          value={privateKey}
        />
        <Text style={styles.keyLabel}>Public Key</Text>
        <QRCode
          style={styles.qrcode}
          value={publicKey}
        />
        <View style={styles.info}>
          <Text style={styles.keyLabel}>Print this info to backup your Tera Wallet</Text>
        </View>
        <XButton
          title="OK, Continue!"
          onPress={() => {
            navigation.navigate('RootStack');
          }}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    wallet: state.wallet,
  }),
  {
    generateKeyPairs: walletActions.generateKeyPairs,
  },
)(NewWallet);
