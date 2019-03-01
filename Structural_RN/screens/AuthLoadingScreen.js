import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet, Text, AsyncStorage } from 'react-native';

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props)
        this.loadApp()
    }

    loadApp = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }
 


    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AuthLoadingScreen;
