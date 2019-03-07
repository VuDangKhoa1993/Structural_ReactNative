import React, { Component } from 'react';
import { View, Text, Image, Animated, Dimensions, ScrollView, SafeAreaView, TextInput, StatusBar, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Category from '../AirbnbStack/Explore/Category'
import Home from '../AirbnbStack/Explore/Home';
import Tag from '../AirbnbStack/Explore/Tag';

const homeImage = "https://media.gettyimages.com/photos/idyllic-home-with-covered-porch-picture-id479767332?s=612x612"
const experiencesImage = "https://images.pexels.com/photos/459522/pexels-photo-459522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
const restaurantImage = "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg"
const FoodImage = "https://dimirealestate.com.au/wp-content/uploads/2018/05/dieta-low-carb-1.jpeg"

const SCREEN_SIZE = Dimensions.get('window')



export default class ExploreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.startHeaderHeight = 50
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomColor: '#dddddd', borderBottomWidth: 1 }}>
            <View style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderWidth: 0.5,
              borderRadius: 10,
              borderColor: '#dddddd',
              alignItems: 'center',
              padding: 5,
              marginHorizontal: 20,
              shadowColor: 'black',
              shadowOffset: { width: 5, height: 3 },
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS == 'android' ? 30 : null,
            }}>
              <Ionicons name="md-search" size={24} color="gray"></Ionicons>
              <TextInput style={{ flex: 1, fontWeight: 'bold', fontSize: 20, fontStyle: 'italic', backgroundColor: 'white' }}
                placeholder='Search'
                placeholderTextColor='gray'
              />
            </View>
            <Animated.View style={{
              flexDirection: 'row',
              position: 'relative',
              top: 5,
              marginHorizontal: 20
            }}>
              <Tag name="Guest" />
              <Tag name="Dates" />
            </Animated.View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>
              <Text style={{ fontSize: 24, paddingHorizontal: 20, fontWeight: '700' }}>What can we help you find, Varum?</Text>
              <View style={{ height: 130, paddingHorizontal: 20, marginTop: 20 }} >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUrl={homeImage} description="Home"></Category>
                  <Category imageUrl={experiencesImage} description="Experience"></Category>
                  <Category imageUrl={restaurantImage} description="Restaurant"></Category>
                  <Category imageUrl={FoodImage} description="Food"></Category>
                </ScrollView>
              </View>
              <View style={{ paddingTop: 20 }}>
                <Text style={{
                  paddingHorizontal: 20,
                  fontSize: 24,
                  fontWeight: '700'
                }}>Introducing Airbnb Plus</Text>
                <Text style={{
                  paddingHorizontal: 20,
                  fontSize: 15
                }}>
                  A new selection of homes verified for quality & comfort
                </Text>
                <View style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  width: SCREEN_SIZE.width,
                  height: 200
                }}>
                  <Image source={{ uri: homeImage }} style={{
                    flex: 1,
                    width: null,
                    height: null,
                    borderColor: '#dddddd',
                    borderWidth: 0.5,
                    borderRadius: 10,
                    resizeMode: 'cover'
                  }} />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
              <Text style={{
                fontSize: 24,
                fontWeight: '700'
              }}>Homes around the world</Text>
              <Home imageUrl={homeImage} name="PRIVATE ROOM - 2 BEDS" description="The Cosy Place" price="25" rating={4} />
              <Home imageUrl={homeImage} name="PRIVATE ROOM - 2 BEDS" description="The Cosy Place" price="25" rating={2} />
              <Home imageUrl={homeImage} name="PRIVATE ROOM - 2 BEDS" description="The Cosy Place" price="25" rating={5} />
              <Home imageUrl={homeImage} name="PRIVATE ROOM - 2 BEDS" description="The Cosy Place" price="25" rating={3} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
