import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Card = ({imageUri, title, description, prices}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={imageUri}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}></ImageBackground>
      <View style={styles.overlay}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardPrices}>{prices}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  imageStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  cardPrices: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    padding: 2,
  },
  cardDescription: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
});

export default Card;
