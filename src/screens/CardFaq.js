import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CardFaq({question, answer}) {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* <Icon
          name="question-circle"
          size={20}
          color="#000"
          style={{marginRight: 5}}
        /> */}
        <Text style={styles.question}>{question}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.answer}>{answer}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  question: {
    fontSize: 18,
    padding: 5,
    marginTop: 7,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  answer: {
    padding: 5,
    fontSize: 16,
    justifyContent: 'space-between',
    color: 'gray',
  },
});

export default CardFaq;
