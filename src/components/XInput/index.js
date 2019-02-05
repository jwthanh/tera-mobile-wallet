/**
 *
 * @format
 * @flow
 * */
import * as React from 'react';
import { View, TextInput } from 'react-native';
import type {
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

import styles from './styles';

type Props = {
  ...TextInput.propTypes,
  placeholder?: string,
  style?: ViewStyleProp,
  wrapperStyle?: ViewStyleProp,
}

type State = {

}

class XInput extends React.Component<Props, State> {
  static defaultProps = {
    placeholder: 'type some key...',
    style: null,
    wrapperStyle: null,
  };

  state = {};

  text = '';

  input = undefined;

  value = (): string => this.text;

  clear = (): void => {
    if (this.input) {
      this.input.clear();
    }
    this.text = '';
  }

  render(): React.Node {
    const { placeholder, style, wrapperStyle } = this.props;
    return (
      <View style={[styles.root, wrapperStyle]}>
        <TextInput
          ref={(textInput) => {
            this.input = textInput;
          }}
          placeholder={placeholder}
          onChangeText={(text) => { this.text = text; }}
          {...this.props}
          style={[styles.input, style]}
        />
      </View>
    );
  }
}

export default XInput;
