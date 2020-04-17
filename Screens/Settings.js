import React from 'react'
import { StyleSheet, View } from 'react-native';

class Settings extends React.Component {
  static minimum = 0;
  static maximum = 20;

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default Settings
