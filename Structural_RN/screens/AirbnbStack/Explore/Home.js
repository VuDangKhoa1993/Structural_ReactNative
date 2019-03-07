import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import StarRating from 'react-native-star-rating';


const SCREEN_SIZE = Dimensions.get('window')


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { imageUrl, name, description, price, rating } = this.props
        return (
            <View style={{
                width: SCREEN_SIZE.width / 2 - 30,
                height: SCREEN_SIZE.height / 2 - 30,
                borderColor: '#dddddd',
                borderWidth: 0.5,
                marginTop: 20
            }}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: imageUrl }}
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'cover'
                        }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        paddingTop: 10,
                        paddingLeft: 10,
                        color: 'tomato',
                        fontSize: 10
                    }}>{name}</Text>
                    <Text style={{
                        paddingTop: 10,
                        fontSize: 12,
                        paddingLeft: 10,
                        fontWeight: '700'
                    }}>{description}</Text>
                    <Text style={{
                        paddingTop: 10,
                        fontSize: 10,
                        paddingLeft: 10
                    }}>Price: {price}$</Text>
                    <View style = {{paddingHorizontal: 10, marginTop: 20}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={rating}
                        starSize = {10}
                        //selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                </View>
                </View>
            </View>
        );
    }
}
