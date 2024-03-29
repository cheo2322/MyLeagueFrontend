import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Button from '../components/Button';

import { API_BASE_URL } from '@env';

export default function NewLeague({ navigation }) {
  const [name, onChangeName] = useState('');
  const [location, onChangeLocation] = useState('');
  const [field, onChangeField] = useState('');
  const [major, onChangeMajor] = useState('');

  const postLeague = async () => {
    try {
      await fetch(`${API_BASE_URL}/my_league/v1/league`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          location: location,
          field: field,
          major: major,
        }),
      })
        .then((response) => response.json())
        .then((data) =>
          navigation.navigate('LeagueImageSelector', { id: data.leagueId })
        );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeLocation}
        value={location}
        placeholder="Location"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeField}
        value={field}
        placeholder="Field"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeMajor}
        value={major}
        placeholder="Major"
      />

      <Button label="Next" onPress={postLeague} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
