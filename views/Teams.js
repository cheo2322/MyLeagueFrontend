import { Text } from 'react-native';

export default function Teams({ route }) {
  const { id } = route.params;

  return <Text>{id}</Text>;
}
