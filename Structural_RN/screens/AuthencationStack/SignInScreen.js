import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, ScrollView, AsyncStorage, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';

const SCREEN_SIZE = Dimensions.get('window')

export default class SignInScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowHud: false
        }
    }

    _onSignIn = async () => {
        this.setState({ isShowHud: !this.state.isShowHud })
        await AsyncStorage.setItem('userToken', 'abc')
        setTimeout(() => {
            this.setState({ isShowHud: !this.state.isShowHud })
            this.props.navigation.navigate('App')
        }, 3000)
    }

    render() {
        return (
            <ScrollView>
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
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={{ uri: 'http://clipart-library.com/images/di45nGk5T.jpg' }}
                    />
                    <Text style={{
                        color: 'white',
                        fontSize: 25,
                        padding: 10,
                        fontWeight: 'bold'
                    }}>LOG IN WITH FACEBOOK</Text>
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