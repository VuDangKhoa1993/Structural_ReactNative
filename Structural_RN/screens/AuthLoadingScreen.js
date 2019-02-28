import React, {Component} from 'react'
import { View, ActivityIndicator,StyleSheet, Text } from 'react-native';

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style = {styles.container}>
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
