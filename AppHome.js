import React from 'react';
import { Pressable, Avatar, ScrollView, VStack, Center, Box, Heading, HStack, Checkbox, Input, IconButton, Icon, Text, useToast, Feather, Entypo, Image } from 'native-base';
import { IOScrollView, InView } from 'react-native-intersection-observer'
import { Choose, When, Otherwise } from 'babel-plugin-jsx-control-statements'
import AppItemCard from './AppItemCard';

function AppHome({ navigation }) {
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
  ];

  return (
    <IOScrollView>
    <ScrollView>
        <Center w="100%">
          <Box maxW="300" w="100%">
            <Heading mb="2" size="md">Items List</Heading>
              <VStack space={200}>
                {items.map((item, index) =>
                  <Choose key={item.title + index.toString()} key={'choose' +item.title + index.toString()}>
                    <When condition={ (index + 1) >= 10 && (index + 1) % 5 == 0 } key={'when' + item.title + index.toString()}>
                      <InView onChange={(inView) => console.log('Inview:', inView)} triggerOnce={true} key={'inview' +item.title + index.toString()}>
                        <AppItemCard item={item} navigation={navigation} key={'card' +item.title + index.toString()}></AppItemCard>
                      </InView>
                    </When>
                    <Otherwise>
                      <AppItemCard item={item} key={'card' +item.title + index.toString()}></AppItemCard>
                    </Otherwise>
                  </Choose>)
                }
              </VStack>
          </Box>
        </Center>

      </ScrollView>
      </IOScrollView>
  );
}

export default AppHome;
