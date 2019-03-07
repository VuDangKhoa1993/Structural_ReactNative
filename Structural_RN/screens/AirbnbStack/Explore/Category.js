import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let {description, imageUrl } = this.props

        return (
            <View style={{ height: 130, width: 130, borderWidth: 0.5, borderColor: '#dddddd', marginRight: 20 }}>
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: imageUrl }} style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }} />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{description}</Text>
                </View>
            </View>
        );
    }
}
