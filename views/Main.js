import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

import { API_BASE_URL } from '@env';

const actions = [
  {
    text: 'Add a new league',
    icon: require('../assets/images/icons/cup.png'),
    name: 'new_cup',
    position: 3,
  },
  {
    text: 'Edit my league',
    icon: require('../assets/images/icons/cup.png'),
    name: 'edit_league',
    position: 2,
  },
  {
    text: 'Edit my team',
    icon: require('../assets/images/icons/ball.png'),
    name: 'edit_team',
    position: 1,
  },
];

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
    <View style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator color={'red'} size="large" />
        ) : (
          data.map((item) => <Text key={item.leagueId}>{item.name}</Text>)
        )}
      </View>

      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          switch (name) {
            case 'new_cup':
              goToNewLeague();
              break;
            case 'edit_league':
              navigation.navigate('MyLeagues', {});
              break;
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
