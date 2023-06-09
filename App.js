import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostList from './PostList';
import PostDetail from './PostDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PostList"
          component={PostList}
          options={{ title: 'Lista de publicaciones' }}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{ title: 'Detalles del post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
