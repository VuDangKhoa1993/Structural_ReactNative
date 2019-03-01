import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Button } from 'react-native';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onSignOut = async () => {
      await AsyncStorage.clear()
        this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text> SettingScreen </Text>
        <Button title = 'Sign Out' onPress = {this._onSignOut} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        flexDirection: 'row'
    }
});
