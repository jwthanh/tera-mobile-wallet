/**
 *
 * @format
 * @flow
 * */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

type Props = {
  navigation: Object,
}

class Loading extends React.Component<Props> {
  state = {};

  componentDidMount(): void {
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate('RootStack');
    }, 3000);
  }

  render(): React.ReactNode {
    return (
      <View style={styles.root}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default Loading;
