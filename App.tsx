

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import HomeScreen from './src/screens/home/home_screen';
import HomeScreen2 from './src/screens/home/home_screen2';
import NewDetailsScreen from './src/screens/news_details/news_details_screen';
 
const Stack = createNativeStackNavigator();


 const App = () => {
   return (
     <NavigationContainer>

<Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'iNews' }}
          
        />
        <Stack.Screen name="NewDetailsScreen" component={NewDetailsScreen} options={{ title: '' }} />
      </Stack.Navigator>

     </NavigationContainer>
   );
 };
 
 
 export default App;
