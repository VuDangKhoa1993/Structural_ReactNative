import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <HeaderLeft name = 'md-camera' color = 'gray' />,
      headerTitle: <HeaderTitle name = 'https://sunrisesurfshop.com/wp-content/uploads/2017/03/instagram-logo1.png'/>,
      headerRight: <HeaderRight icon1 = "md-tv" icon2 = "md-navigate" />,
      headerStyle: {
        backgroundColor: 'orange',
      },
      headerTintColor: '#fff'
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground imageStyle={{ opacity: 0.8, backgroundColor: 'green' }} 
        source={{ uri: 'https://images.unsplash.com/photo-1527009063186-a80dd0ef0958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} 
        style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {{
            fontSize: 20,
            color: 'red'
          }}>Home Screen</Text>
        </ImageBackground>
        </View>
    );
  }
}

const HeaderLeft = () => {
  let {name, color} = this.props
  return (
    <View>
      <Ionicons name = {name} size = {20} color = {color} ></Ionicons>
    </View>
  )
}


const HeaderTitle = () => {
  let {name} = this.props
  return (
    <Image source = {{uri: name}} style = {{width: 30, height: 30}} />
  )
}



const HeaderRight = () => {
  let {icon1, icon2} = this.props
  return (
    <View style = {{
      width: 200,
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Ionicons name = {icon1} size = {20} color = 'gray' style = {{marginRight: 10}} />
      <Ionicons name = {icon2} size = {20} color = 'gray' />
    </View>
  )
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


