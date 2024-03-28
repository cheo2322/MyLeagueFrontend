import { StyleSheet, View, SafeAreaView } from 'react-native';

import CircleButton from '../components/CircleButton';

export default function Main({ navigation }) {
  const onAddSticker = async () => {
    navigation.navigate('New', {});
  };

  return (
    <SafeAreaView>
      <View style={styles.optionsContainer}>
        <CircleButton onPress={onAddSticker} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
