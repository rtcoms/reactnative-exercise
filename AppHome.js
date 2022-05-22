import React from 'react';
import { Pressable, Avatar, ScrollView, VStack, Center, Box, Heading, HStack, Checkbox, Input, IconButton, Icon, Text, useToast, Feather, Entypo, Image } from 'native-base';
import { IOScrollView, InView } from 'react-native-intersection-observer'
import { Choose, When, Otherwise } from 'babel-plugin-jsx-control-statements'
import AppItemCard from './AppItemCard';
import useStore from './AppState';

function AppHome({ navigation }) {
  const items = useStore(state => state.items);
  const addFeedItems = useStore((state) => state.generateItems);

  return (
    <IOScrollView>
    <ScrollView>
        <Center w="100%">
          <Box maxW="300" w="100%">
            <Heading mb="2" size="md">Items List</Heading>
              <VStack space={200}>
                {items.map((item, index) =>
                  <Choose key={item.title + index.toString()} key={'choose' + index.toString()}>
                    <When condition={ (index + 1) >= 10 && (index + 1) % 5 == 0 } key={'when' + index.toString()}>
                      <InView onChange={(inView) => { console.log('Inview:', inView); addFeedItems(index + 1 + 5);}} triggerOnce={true} key={'inview' + index.toString()}>
                        <AppItemCard item={item} index={index} navigation={navigation} key={'card' + index.toString()}></AppItemCard>
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
