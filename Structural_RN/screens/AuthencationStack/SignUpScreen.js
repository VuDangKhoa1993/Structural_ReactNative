import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, Image, AsyncStorage, TextInput } from 'react-native';




export default class SignUpScreen extends Component {
    constructor(props) {
        super(props)
    }

    _onSignUp = () => {
        alert('Create Account Success')
        this.props.navigation.navigate('SignIn')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
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
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20,
                        }}>
                            <TextInput
                                style={{
                                    fontSize: 20,
                                    color: 'white',
                                    height: 40,
                                    width: '75%',
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 0.5
                                }}
                                placeholder='NAME'
                                placeholderTextColor='white'
                            />
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20,
                        }}>
                            <TextInput
                                style={{
                                    fontSize: 20,
                                    color: 'white',
                                    height: 40,
                                    width: '75%',
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 0.5
                                }}
                                placeholder='EMAIL'
                                placeholderTextColor='white'
                                keyboardType={'email-address'}
                            />
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20
                        }}>
                            <TextInput
                                style={{
                                    fontSize: 20,
                                    color: 'white',
                                    height: 40,
                                    width: '75%',
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 0.5
                                }}
                                placeholder='PASSWORD'
                                placeholderTextColor='white'
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20
                        }}>
                            <TouchableHighlight
                                underlayColor="blue"
                                onPress={this._onSignUp}
                                style={{
                                    width: '75%',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    backgroundColor: 'white',
                                    marginBottom: 20,
                                }}
                            >
                                <Text style={{
                                    color: 'gray',
                                    fontSize: 25,
                                    padding: 10,
                                    fontWeight: 'bold'
                                }}>CREATE ACCOUNT</Text>
                            </TouchableHighlight>
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
        flex: 1
    },
    content: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(52,52,52,0.8)'
    }
});