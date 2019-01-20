/**
 *
 * @format
 * @flow
 * */
import React from 'react';
import { View, TextInput } from 'react-native';
import type {
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

import styles from './styles';

type Props = {
  ...TextInput.props,
  placeholder?: string,
  style?: ViewStyleProp,
  wrapperStyle?: ViewStyleProp,
}

class XInput extends React.Component<Props> {
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

  render(): React.ReactNode {
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
