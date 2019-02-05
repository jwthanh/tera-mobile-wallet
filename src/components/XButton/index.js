/**
 *
 * @format
 * @flow
 * */
import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type {
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

import styles from './styles';

type Props = {
  // $FlowFixMe
  ...TouchableOpacity.propTypes,
  title: string,
  onPress?: Function,
  style?: ViewStyleProp,
  wrapperStyle?: ViewStyleProp,
}

type State = {

}

class XButton extends React.Component<Props, State> {
  static defaultProps = {
    onPress: () => {},
    style: null,
    wrapperStyle: null,
  };

  state = {};

  render(): React.Node {
    const {
      title, style, wrapperStyle, onPress,
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.root, wrapperStyle, style]}
        onPress={
        () => {
          if (onPress) onPress();
        }
      }
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default XButton;
