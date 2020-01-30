import React from 'react'
import { StyleSheet, View, Button, TouchableOpacity, Image, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import InputNumber from './InputNumber'

const defaultPlaceholders = ["Minimum", "Moyenne", "Maximum"];

class NewSession extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nouvelle session',
      headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
          <Icon
            name='check'
            size={25}
            color='green'
            style={{marginRight: 15}}
          />
        </TouchableOpacity>),

      headerLeft: () => (
        <TouchableOpacity onPress={() => {navigation.navigate("MainMenu")}}>
          <Icon
            name='close'
            size={25}
            color='#555'
            style={{marginLeft: 15}}
          />
        </TouchableOpacity>)
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      checked: [true, false, true],
      values: ["","",""],
      placeholders: ["Minimum", "Moyenne", "Maximum"]
    }
    this.references = [
      React.createRef(),
      React.createRef(),
      React.createRef()
    ]
  }


  onCheck(id) {
    var value;
    if (this.state.checked[id]) {
      this.references[id].current.clear();
      this._setValue(id, '');
      this.onChangeHandler();
      value = false;
    }
    else {
      var count = 0;
      this.state.checked.forEach((item, i) => {
        if (item) count++;
      });
      if (count >= 2) {
        return;
      }
      this._setPlaceholder(id, defaultPlaceholders[id])
      value = true;
    }
    var tmp = this.state.checked;
    tmp[id] = value;
    this.setState({checked: tmp});
  }

  _setValue(id, value) {
    const tmp = this.state.values;
    tmp[id] = value;
    this.setState({values: tmp});
  }

  _setPlaceholder(id, text) {
    const tmp = this.state.placeholders;
    tmp[id] = text;
    this.setState({placeholders: tmp});
  }

  _getValue(id) {
    return (parseInt(this.state.values[id]) || 0)
  }

  onChangeHandler = (text, id) => {
    this._setValue(id, text);
    switch (this.state.checked.toString()) {
      case 'true,false,true':
        if (this.state.values[0]=='' || this.state.values[2]=='' || this._getValue(0) > this._getValue(2)) {
          this._setPlaceholder(1, defaultPlaceholders[1]);
        }
        else {
          this._setPlaceholder(1, ((this._getValue(0)+this._getValue(2))/2).toString());
        }
      break;
      case 'true,true,false':
        if (this.state.values[0]=='' || this.state.values[1]=='' || this._getValue(0) > this._getValue(1)) {
          this._setPlaceholder(2, defaultPlaceholders[2]);
        }
        else {
          this._setPlaceholder(2, ((this.state.values[1]*2-this.state.values[0])).toString());
        }
      break;
      case 'false,true,true':
        if (this.state.values[1]=='' || this.state.values[2]=='' || this._getValue(1) > this._getValue(2)) {
          this._setPlaceholder(0, defaultPlaceholders[0]);
        }
        else {
          this._setPlaceholder(0, ((this.state.values[1]*2-this.state.values[2])).toString());
        }
      break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex:1.5, margin: 20, justifyContent: 'space-around' }}>
          <Text style={styles.label}>Veuillez renseigner deux des champs ci-dessous</Text>
          <View style={this.state.checked[0] ? styles.checked : styles.unchecked}>
            <CheckBox
              checked={this.state.checked[0]}
              onPress={() => {this.onCheck(0)}}
            />
            <InputNumber
              id={0}
              reference={this.references[0]}
              checked={this.state.checked[0]}
              placeholder={this.state.placeholders[0]}
              onChangeHandler={this.onChangeHandler}
            />
          </View>
          <View style={this.state.checked[1] ? styles.checked : styles.unchecked}>
            <CheckBox
              checked={this.state.checked[1]}
              onPress={() => {this.onCheck(1)}}
            />
            <InputNumber
              id={1}
              reference={this.references[1]}
              checked={this.state.checked[1]}
              placeholder={this.state.placeholders[1]}
              onChangeHandler={this.onChangeHandler}
            />
          </View>
          <View style={this.state.checked[2] ? styles.checked : styles.unchecked}>
            <CheckBox
              checked={this.state.checked[2]}
              onPress={() => {this.onCheck(2)}}
            />
            <InputNumber
              id={2}
              reference={this.references[2]}
              checked={this.state.checked[2]}
              placeholder={this.state.placeholders[2]}
              onChangeHandler={this.onChangeHandler}
            />
          </View>
        </View>
        <View style={{ flex:1, backgroundColor: 'skyblue' }}>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'
  },

  label: {
    alignSelf: 'center',
    fontStyle: 'italic',
    paddingBottom: 5
  },

  checked: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
  },
  unchecked: {
    flexDirection: 'row',
  },
});

export default NewSession
