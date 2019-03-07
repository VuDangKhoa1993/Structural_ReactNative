import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableHighlight } from 'react-native';

export default class WelcomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Welcome to the App',
        headerStyle: {
            backgroundColor: 'whites'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            color: 'orange',
            flex: 1,
            textAlign: 'center'
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image
                            style={{ width: 200, height: 200, borderRadius: 50 }}
                            source={{ uri: 'https://enjoyjava.com/wp-content/uploads/2018/01/How-to-make-strong-coffee.jpg' }}
                        />
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableHighlight
                                underlayColor = "blue"
                                onPress = {() => this.props.navigation.navigate('SignUp')}
                                style = {{
                                    width: '50%',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    backgroundColor: 'white',
                                    marginBottom: 20,
                                }}
                            >
                                <Text style = {{
                                    color: 'blue',
                                    fontSize: 20,
                                    padding: 10,
                                    fontWeight: 'bold'
                                }}>SIGN UP</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor = "white"
                                onPress = {() => this.props.navigation.navigate('SignIn')}
                                style = {{
                                    width: '50%',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    backgroundColor: 'transparent',
                                    marginBottom: 20,
                                }}
                            >
                                <Text style = {{
                                    color: 'white',
                                    fontSize: 20,
                                    padding: 10,
                                    fontWeight: 'bold'
                                }}>SIGN IN</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                                <Text style = {{
                                    color: 'white',
                                    fontSize: 40,
                                    padding: 10,
                                    fontWeight: 'bold'
                                }}>07 : 00 PM</Text>
                                <Text style = {{
                                    color: 'white',
                                    fontSize: 20,
                                    padding: 10,
                                    fontWeight: 'bold'
                                }}>Friday, May 2017</Text>
                        </View>
                    </View>
                </View>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: 'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(52,52,52,0.8)'
    }
});