import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, ScrollView, AsyncStorage, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import firebase from '../../Firebase'
import { LoginButton } from 'react-native-fbsdk';


const SCREEN_SIZE = Dimensions.get('window')

export default class SignInScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowHud: false,
            email: '',
            password: ''
        }
    }

    static navigationOptions = {
        title: 'Sign In'
    }

    _onSignIn = () => {
        let { email, password } = this.state

        this.setState({ isShowHud: !this.state.isShowHud })

        firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
            this._onSignInSuccess(response.user.uid)
        }).catch((error) => {
            console.log(error)
            this.setState({ isShowHud: !this.state.isShowHud })
        })
    }

    _onSignInSuccess = async (res) => {
        await AsyncStorage.setItem('userToken', res).then(() => {
            this.props.navigation.navigate('App')
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle = {{height: SCREEN_SIZE.height}}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
                                    value={this.state.email}
                                    onChangeText={(text) => {
                                        this.setState({ email: text })
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
                                    value={this.state.password}
                                    onChangeText={(password) => {
                                        this.setState({ password: password })
                                    }}
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
                                    onPress={this._onSignIn}
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
                                    }}>LOG IN</Text>
                                </TouchableHighlight>
                            </View>
                            {this.state.isShowHud ?
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 20
                                }}>
                                    <ActivityIndicator size='large' style={{
                                        backgroundColor: 'transparent',
                                        width: 100,
                                        height: 100
                                    }} />
                                    <Text style={{
                                        color: 'gray',
                                        fontSize: 15,
                                        padding: 10,
                                        fontWeight: 'bold'
                                    }}>Loading...</Text>
                                </View>
                                : otherLogin()}
                        </View>
                    </View>
                    <Image
                        style={{ width: SCREEN_SIZE.width, height: SCREEN_SIZE.height }}
                        source={{ uri: 'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                    />
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const otherLogin = () => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        }}>
            <Text style={{ fontSize: 20, color: 'white', marginBottom: 20 }}>Forgot Password?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '75%', marginBottom: 20, alignItems: 'center' }}>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 5, height: 1, width: '35%' }}></View>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 50, marginRight: 50 }}>OR</Text>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 5, height: 1, width: '35%' }}></View>
            </View>

            <TouchableHighlight
                underlayColor="#4867aa"
                style={{
                    width: '75%',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#4867aa',
                    marginBottom: 20,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <LoginButton
                            publishPermissions={["email"]}
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        alert("Login failed with error: " + error.message);
                                    } else if (result.isCancelled) {
                                        alert("Login was cancelled");
                                    } else {
                                        alert("Login was successful with permissions: " + result.grantedPermissions)
                                    }
                                }
                            }
                            onLogoutFinished={() => alert("User logged out")} />
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#384962'
    },
    content: {
        width: SCREEN_SIZE.width,
        height: SCREEN_SIZE.height,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(52,52,52,0.8)'
    }
});