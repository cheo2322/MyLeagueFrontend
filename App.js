import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './views/Main';
import NewLeague from './views/NewLeague';
import PictureSelector from './views/PictureSelector';
import Teams from './views/Teams';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="New" component={NewLeague} />
        <Stack.Screen name="PictureSelector" component={PictureSelector} />
        <Stack.Screen name="Teams" component={Teams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
