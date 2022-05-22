import React from 'react';
import { Pressable, Avatar, ScrollView, VStack, Center, Box, Heading, HStack, Checkbox, Input, IconButton, Icon, Text, useToast, Feather, Entypo, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function AppItemCard({item}) {
  console.log('------ item card');
  console.log(item);
  const navigation = useNavigation();

  return (
    <Pressable cursor='pointer'  onPress={() => {console.log("I'm Pressed"); navigation.navigate('Details', {item: item})}}>
      <HStack w="100%" justifyContent="space-between" alignItems="center" >
        <Text>{item.title}</Text>
        <Avatar size="48px" source={{ uri: item.image}} />
      </HStack>
    </Pressable>
  )
}

export default AppItemCard;
