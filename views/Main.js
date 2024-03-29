import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';

import CircleButton from '../components/CircleButton';

import { API_BASE_URL } from '@env';

export default function Main({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}/my_league/v1/league`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  const goToNewLeague = async () => {
    navigation.navigate('New', {});
  };

  return (
    <SafeAreaView>
      <View>
        {isLoading ? (
          <ActivityIndicator color={'red'} size="large" />
        ) : (
          data.map((item) => <Text key={item.leagueId}>{item.name}</Text>)
        )}
      </View>
      <View>
        <CircleButton onPress={goToNewLeague} />
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
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
