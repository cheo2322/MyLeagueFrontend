import { useState } from 'react';
import { Text, View } from 'react-native';

import PictureSelector from './PictureSelector';

export default function LeagueImageSelector({ route, navigation }) {
  const { id } = route.params;

  return (
    <View>
      <PictureSelector />
    </View>
  );
}
