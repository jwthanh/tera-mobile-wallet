/**
 *
 * @format
 * @flow
 * */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

class Loading extends React.Component {
  state = {};

  render(): React.ReactNode {
    return (
      <View style={styles.root}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default Loading;
