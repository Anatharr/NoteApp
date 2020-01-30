import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

class MainMenu extends React.Component {
  static navigationOptions = {
      headerShown: false,
  };
  
  render() {
    return (
      <ImageBackground source={require('../assets/wallpaper.png')} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Note</Text>
          <Text style={styles.subtitle}>Aide à la notation</Text>
        </View>
        <View style={styles.content}>
          <View style={{width: '60%', height: '30%', justifyContent: 'space-between'}}>
            <Button
              title='Nouvelle session'
              onPress={() => {this.props.navigation.navigate("NewSession")}}
            />
            <Button
              title='Réglages'
              disabled
              // onPress={() => {}}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    // backgroundColor: 'powderblue',
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
  },
  content: {
    // backgroundColor: 'skyblue',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 100,
    fontStyle: 'italic',
    fontFamily: 'serif',
    color: '#eee',
    paddingBottom: 0,
  },
  subtitle: {
    fontSize: 30,
    color: '#aaa',
  },
});

export default MainMenu
