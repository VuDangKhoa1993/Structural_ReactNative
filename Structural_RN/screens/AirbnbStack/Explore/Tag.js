import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { name } = this.props
        return (
            <View style={{
                minHeight: 20,
                minWidth: 40,
                backgroundColor: 'white',
                borderColor: '#dddddd',
                borderWidth: 0.5,
                borderRadius: 5,
                marginRight: 10,
                padding: 5
            }}>
                <Text style={{ fontSize: 12, fontWeight: '700' }}>{name}</Text>
            </View>
        );
    }
}
