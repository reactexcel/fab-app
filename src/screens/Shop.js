import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Shop = ({imageUri1, title1, imageUri2, title2}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={imageUri1}
          style={[styles.cardImage, styles.imageStyle]}
          imageStyle={styles.imageStyle}>
          <Text style={styles.imageTitle}>{title1}</Text>
        </ImageBackground>
        <Text style={styles.imageTitle}>{title1}</Text>
        <ImageBackground
          source={imageUri2}
          style={[styles.cardImage, styles.imageStyle]}
          imageStyle={styles.imageStyle}>
          <Text style={styles.imageTitle}>{title2}</Text>
        </ImageBackground>
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
    marginHorizontal: 15,
    marginVertical: 7,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  cardImage: {
    flex: 1,
    height: 200,
    justifyContent: 'flex-end',
    padding: 10,
    width: 172,
  },
  imageStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    width: 'auto',
  },
});

export default Shop;
