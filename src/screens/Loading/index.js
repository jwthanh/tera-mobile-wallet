/**
 *
 * @format
 * @flow
 * */
import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

type Props = {
  navigation: Object,
}

type State = {

}

class Loading extends React.Component<Props, State> {
  state = {};

  componentDidMount(): void {
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate('RootStack');
    }, 3000);
  }

  render(): React.Node {
    return (
      <View style={styles.root}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default Loading;
