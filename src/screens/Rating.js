import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import fullStar from '../assests/fullStar.png';
import blankStar from '../assests/blankStar.png';

function Rating() {
  const [defaultRating, SetDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const CustomRatingBar = () => {
    return (
      <View style={styles.customBarRatingStyle}>
        {maxRating.map((item, key) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => SetDefaultRating(item)}>
            <Image
              source={defaultRating >= item ? fullStar : blankStar}
              style={styles.starImgStyle}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Please Rate Us</Text>
      <CustomRatingBar />
      <Text style={styles.textStyle}>
        {defaultRating + '/' + maxRating.length}
      </Text>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: colors.black,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    height: 320,
    margin: 30,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 20,
    color: colors.black,
  },
  customBarRatingStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    margin: 2,
  },
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: colors.orange,
    width: '90%',
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
  },
});
export default Rating;
