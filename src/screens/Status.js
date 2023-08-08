import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyCarousel from '../components/MyCarousel';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

function Status() {
  const [lastSeen, setLastSeen] = useState('');

  useEffect(() => {
    const screenOpenTime = new Date();

    // Simulate some async loading process
    // setTimeout(() => {
    //   setProgressText('Progress....');
    // }, 2000);

    const updateLastSeen = () => {
      const currentTime = new Date();
      const timeDiff = currentTime - screenOpenTime;

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);

      setLastSeen(`Updated at:- ${hours} hrs and ${minutes} min ago`);
    };

    updateLastSeen();
    const intervalId = setInterval(updateLastSeen, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const updateLastSeen = () => {
    const currentTime = new Date();
    const timeDiff = currentTime - screenOpenTime;

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    setLastSeen(
      `Last seen ${hours} hours, ${minutes} minutes, and ${seconds} seconds ago`,
    );
  };

  function Accordion({title, content}) {
    const [expanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
      setExpanded(!expanded);
    };
    return (
      <View style={styles.accordionContainer}>
        <TouchableOpacity
          style={styles.accordionHeader}
          onPress={toggleAccordion}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.accordionTitle}>{title}</Text>
            <View style={{marginLeft: 230}}>
              <Icon
                name={
                  expanded ? 'chevron-down-outline' : 'chevron-forward-outline'
                }
                size={18}
                color={colors.orange}
              />
            </View>
          </View>
        </TouchableOpacity>
        {expanded && <View style={styles.accordionContent}>{content}</View>}
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.timeline}>
          <Text>{lastSeen}</Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.heading}>Work progresses...</Text>
          <Accordion
            title="Work 1"
            content={
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.heading}>Progress of work</Text>
                <MyCarousel />
              </View>
            }
          />
          <Accordion
            title="Work 2"
            content={
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.heading}>Progress of work</Text>
                <MyCarousel />
              </View>
            }
          />
          <Accordion
            title="Work 3"
            content={
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.heading}>Progress of work</Text>
                <MyCarousel />
              </View>
            }
          />
        </View>

        {/* <View style={{height: 470, width: 300}}>
          <Text style={styles.heading}>Progress of work</Text>
          <MyCarousel />
        </View> */}

        <View>
          <Text style={styles.twoheading}>Any Query Please fill detail</Text>
          <View style={{padding: 20}}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter any Query"
              multiline={true}
            />
          </View>
          <View
            style={{
              padding: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.orange,
                padding: 10,
                height: 40,
                width: 350,
                borderRadius: 10,
              }}>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  timeline: {
    backgroundColor: colors.orange,
    width: 270,
    padding: 10,
    borderBottomEndRadius: 5,
  },
  progressContainer: {
    alignItems: 'flex-end',
    paddingTop: 20,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 20,
    color: colors.black,
  },
  twoheading: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 20,
    marginTop: 20,
    color: colors.black,
  },
  textInput: {
    height: 100,
    width: 350,
    borderColor: colors.gray,
    borderWidth: 1,
    textAlignVertical: 'top',
    padding: 2,
    borderRadius: 5,
  },
  textHeading: {
    margin: 20,
    fontSize: 22,
  },
  accordionContainer: {
    marginBottom: 20,
    width: 350,
    marginLeft: 20,
  },
  accordionHeader: {
    backgroundColor: colors.gray,
    padding: 10,
    borderBottomEndRadius: 5,
  },
  accordionTitle: {
    fontSize: 18,
    marginLeft: 11,
    color: colors.black,
  },
  accordionContent: {
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderBottomEndRadius: 5,
    backgroundColor: 'white',
  },
});

export default Status;
