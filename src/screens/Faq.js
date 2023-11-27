import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CardFaq from './CardFaq';
import {ScrollView} from 'react-native-gesture-handler';

function Faq() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.faq}>
          <Text style={styles.heading}>Order Related</Text>
          <CardFaq
            question="What is the purpose of FAQs on your website?"
            answer="It saves you time. If you spend a lot of your time answering emails or social media queries, an FAQ can be a real timesaver. It can also help prevent costly and time-consuming returns in your online store. "
          />

          <CardFaq
            question="What questions belong on an FAQ page?"
            answer="The first is pretty obvious: What do your customers ask you? Look at your email inbox or social media account and see which questions keep popping up. What usually makes people hesitate before purchasing? What doubts might they have? The more you can automate the answers to these questions, these easier you’ll make it for your customers to buy with confidence. And you’ll save yourself time too."
          />
          <CardFaq
            question="What other info should go on an FAQ page?"
            answer="Still stumped on what to write? Here are some ideas of what you might include in your FAQ: 
        "
          />
        </View>

        <View style={styles.faq}>
          <Text style={styles.heading}>Product Related</Text>
          <CardFaq
            question="What is the purpose of FAQs on your website?"
            answer="It saves you time. If you spend a lot of your time answering emails or social media queries, an FAQ can be a real timesaver. It can also help prevent costly and time-consuming returns in your online store. "
          />

          <CardFaq
            question="What questions belong on an FAQ page?"
            answer="The first is pretty obvious: What do your customers ask you? Look at your email inbox or social media account and see which questions keep popping up. What usually makes people hesitate before purchasing? What doubts might they have? The more you can automate the answers to these questions, these easier you’ll make it for your customers to buy with confidence. And you’ll save yourself time too."
          />
          <CardFaq
            question="What other info should go on an FAQ page?"
            answer="Still stumped on what to write? Here are some ideas of what you might include in your FAQ: 
        "
          />
        </View>

        <View style={styles.faq}>
          <Text style={styles.heading}>Money Refund</Text>
          <CardFaq
            question="What is the purpose of FAQs on your website?"
            answer="It saves you time. If you spend a lot of your time answering emails or social media queries, an FAQ can be a real timesaver. It can also help prevent costly and time-consuming returns in your online store. "
          />

          <CardFaq
            question="What questions belong on an FAQ page?"
            answer="The first is pretty obvious: What do your customers ask you? Look at your email inbox or social media account and see which questions keep popping up. What usually makes people hesitate before purchasing? What doubts might they have? The more you can automate the answers to these questions, these easier you’ll make it for your customers to buy with confidence. And you’ll save yourself time too."
          />
          <CardFaq
            question="What other info should go on an FAQ page?"
            answer="Still stumped on what to write? Here are some ideas of what you might include in your FAQ: 
        "
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5,
    color:'black',
  },
  faq: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginTop: 15,
  },
});

export default Faq;
