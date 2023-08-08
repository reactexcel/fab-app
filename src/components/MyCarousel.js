import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const carouselData = [
  {
    title: 'Upcoming Events – India Expo centre',
    content:
      'India Biggest Electric Motor Vehicle Show and International Exhibition on Electric Vehicles, Hybrid Vehicles ,Automotive.',
    image: require('../assests/s-1.jpeg'), // Replace with your image path
  },
  {
    title: 'Trade Shows in Noida',
    content:
      'A Combination of Trade mart. With Exhibition & Convention Facilities ; Fully Certified Venue to hold. International ...',
    image: require('../assests/s-3.jpeg'), // Replace with your image path
  },
  {
    title: 'Indian Art Exhibitions in Delhi',
    content:
      'Delhi which are popular for Indian Art Exhibition. Kiran Nadar Museum of Art has always been in limelight for conducting Indian Art ...',
    image: require('../assests/s-4.jpeg'), // Replace with your image path
  },
  {
    title: 'Showcase the diverse cultural heritage',
    content:
      'expo aims to facilitate a holistic conversation and showcase the diverse cultural heritage exhibited by various museums across the country..',
    image: require('../assests/s-5.jpeg'), // Replace with your image path
  },
  // Add more items as needed
];

const MyCarousel = () => {
  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = sliderWidth * 0.8; // For example, each slide takes up 80% of the screen width

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={carouselData}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      autoplay={true} // Enable autoplay
      autoplayInterval={3000}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 5,
    height: 410,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'justify',
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    color: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
  },
});

export default MyCarousel;
