import React from 'react'
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

class InputNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      error: ""
    }
  }

  onChange(text) {
    const allowed_chars = '0123456789.'
    this.props.onChangeHandler(text, this.props.id)
    if (this.props.checked) {
      for (const i in text) {
        if (!allowed_chars.includes(text[i])) {
          this.setState({error: "Veuillez entrer un nombre valide"});
          return;
        }
      }
      this.setState({value: text, error: ""})
    }
    else {
      this.setState({value: this.props.value, error: ''})
    }
  }

  render() {
    return (
      <Input
        ref={this.props.reference}
        errorMessage={this.state.error}
        value={this.state.value}
        keyboardType='numeric'
        onSubmitEditing={() => {this.onChange(this.state.value)}}
        onChangeText={(text) => {this.onChange(text)}}
        disabled={!this.props.checked}
        disabledInputStyle={{opacity: 1}}
        inputContainerStyle={styles.inputContainer}
        placeholder={this.props.placeholder}
        placeholderTextColor={this.props.checked ? '#aaa' : '#ddd'}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
    width: '70%',
  },
});

export default InputNumber
