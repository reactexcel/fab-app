import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import colors from '../styles/colors';

function Requirement() {
  const [budget, setBudget] = useState('');

  const buttonSubmitHandler = () => {
    setBudget(text => setBudget(text));
    Alert.alert('Data Send is successfully', budget);
    setBudget('');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableContainer}>
          <View style={styles.column}>
            <Text style={styles.cellHeader}>Size of Stall</Text>
            <Text style={styles.cellHeader}>Stall no.</Text>
            <Text style={styles.cellHeader}>Color Theme</Text>
            <Text style={styles.cellHeader}>Products to display</Text>
            <Text style={styles.cellHeader}>Branding</Text>
            <Text style={styles.cellHeader}>Carpet color</Text>
            <Text style={styles.cellHeader}>Furniture</Text>
            <Text style={styles.cellHeader}>Comment</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.cell}>20 meter</Text>
            <Text style={styles.cell}>111</Text>
            <Text style={styles.cell}>red</Text>
            <Text style={styles.cell}>Steel Product</Text>
            <Text style={styles.cell}>Vinyl with Sunboard</Text>
            <Text style={styles.cell}>Light Theme</Text>
            <Text style={styles.cell}>Large</Text>
            <Text style={styles.cell}>all ok</Text>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Show Budget
          </Text>
          <View style={styles.budget}>
            <TextInput
              placeholder="Enter Budget"
              value={budget}
              style={styles.input}
              onChangeText={text => setBudget(text)}
            />

            <TouchableOpacity style={styles.btn} onPress={buttonSubmitHandler}>
              <Text style={styles.btn_Text}>Budget</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    borderBlockColor: 'gray',
    borderWidth: 1,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 5,
  },
  column: {
    flex: 1,
    paddingHorizontal: 15,
  },
  btn: {
    backgroundColor: colors.orange,
    width: '50%',
    padding: 10,
    borderRadius: 5,
  },
  cellHeader: {
    fontWeight: 'bold',
    textAlign: 'center',

    paddingVertical: 5,
  },
  cell: {
    textAlign: 'center',

    paddingVertical: 5,
  },

  btn_Text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
  },
  budget: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    gap: 5,
  },
  input: {
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '50%',
  },
});

export default Requirement;
