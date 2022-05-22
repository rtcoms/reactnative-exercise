import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Pressable, Avatar, ScrollView, VStack, Center, Box, Heading, HStack, Checkbox, Input, IconButton, Icon, Text, useToast, Feather, Entypo, Image } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHome from './AppHome';
import AppDetails from './AppDetails';


const App = () => {
  const Stack = createNativeStackNavigator();
  const items = [
    { title: "Title 1", image: 'https://picsum.photos/200', description: 'Description 1' },
    { title: "Title 2", image: 'https://picsum.photos/200', description: 'Description 2' },
    { title: "Title 3", image: 'https://picsum.photos/200', description: 'Description 3' },
    { title: "Title 4", image: 'https://picsum.photos/200', description: 'Description 4' },
    { title: "Title 5", image: 'https://picsum.photos/200', description: 'Description 5' },
    { title: "Title 6", image: 'https://picsum.photos/200', description: 'Description 6' },
    { title: "Title 7", image: 'https://picsum.photos/200', description: 'Description 7' },
    { title: "Title 8", image: 'https://picsum.photos/200', description: 'Description 8' },
    { title: "Title 9", image: 'https://picsum.photos/200', description: 'Description 9' },
    { title: "Title 10", image: 'https://picsum.photos/200', description: 'Description 10' },
    { title: "Title 11", image: 'https://picsum.photos/200', description: 'Description 11' },
    { title: "Title 12", image: 'https://picsum.photos/200', description: 'Description 12' },
    { title: "Title 13", image: 'https://picsum.photos/200', description: 'Description 13' },
    { title: "Title 14", image: 'https://picsum.photos/200', description: 'Description 14' },
    { title: "Title 15", image: 'https://picsum.photos/200', description: 'Description 15' },
    { title: "Title 16", image: 'https://picsum.photos/200', description: 'Description 16' },
    { title: "Title 17", image: 'https://picsum.photos/200', description: 'Description 17' },
    { title: "Title 18", image: 'https://picsum.photos/200', description: 'Description 18' },
    { title: "Title 19", image: 'https://picsum.photos/200', description: 'Description 19' },
    { title: "Title 20", image: 'https://picsum.photos/200', description: 'Description 20' },
    { title: "Title 21", image: 'https://picsum.photos/200', description: 'Description 21' },
    { title: "Title 22", image: 'https://picsum.photos/200', description: 'Description 22' },
    { title: "Title 23", image: 'https://picsum.photos/200', description: 'Description 23' },
    { title: "Title 24", image: 'https://picsum.photos/200', description: 'Description 24' },
    { title: "Title 25", image: 'https://picsum.photos/200', description: 'Description 25' },
    { title: "Title 26", image: 'https://picsum.photos/200', description: 'Description 26' },
    { title: "Title 27", image: 'https://picsum.photos/200', description: 'Description 27' },
    { title: "Title 28", image: 'https://picsum.photos/200', description: 'Description 28' },
    { title: "Title 29", image: 'https://picsum.photos/200', description: 'Description 29' },
    { title: "Title 30", image: 'https://picsum.photos/200', description: 'Description 30' },
  ];
  const [list, setList] = React.useState(items);


  return (<NavigationContainer>
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AppHome} />
        <Stack.Screen
          name="Details"
          component={AppDetails}
          options={({ route }) => ({ title: route.params.item.title })} />
      </Stack.Navigator>
    </NativeBaseProvider>
  </NavigationContainer>);
};

export default App;
