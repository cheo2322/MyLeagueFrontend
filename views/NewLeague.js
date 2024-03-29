import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Button from '../components/Button';
import { View } from 'react-native';

export default function NewLeague({ navigation }) {
  const [name, onChangeName] = useState('');
  const [location, onChangeLocation] = useState('');
  const [field, onChangeField] = useState('');
  const [major, onChangeMajor] = useState('');

  const postLeague = () => {
    const league = {
      name: name,
      location: location,
      field: field,
      major: major,
    };

    navigation.navigate('PictureSelector', { league: league });
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
