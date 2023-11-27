import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

function Response() {
  const [data, setData] = useState('');

  useEffect(() => {
    const apiUrl = 'https://transcribe.ai42.app/get';
    axios
      .get(apiUrl)
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error, data.error);
      });
  }, []);

  return (
    <View>
      <Text>Checking Response</Text>
      <Text> {data}</Text>
    </View>
  );
}
export default Response;
