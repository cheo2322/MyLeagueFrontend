import { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import { API_BASE_URL } from '@env';

export default function Teams({ route }) {
  const { id } = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}/my_league/v1/league/${id}/team`)
      .then((result) => result.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <View>
      <View>
        {isLoading ? (
          <ActivityIndicator color={'red'} size="large" />
        ) : data && data.length > 0 ? (
          data.map((item) => <Text key={item.teamId}>{item.name}</Text>)
        ) : (
          <Text>no data</Text>
        )}
      </View>
    </View>
  );
}
