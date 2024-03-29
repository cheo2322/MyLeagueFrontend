import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './views/Main';
import NewLeague from './views/NewLeague';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="New" component={NewLeague} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
