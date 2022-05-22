import React from 'react';
import { Pressable, Avatar, HStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function AppItemCard({item}) {
  console.log('------ item card');
  console.log(item);
  const navigation = useNavigation();


  return (
    <Pressable onPress={() => { console.log("I'm Pressed"); navigation.navigate('Details', {item: item})}}>
      <HStack w="100%" justifyContent="space-between" alignItems="center" borderWidth="2">
        <Text>{item.title}</Text>
        <Avatar size="48px" source={{ uri: item.image}} />
      </HStack>
    </Pressable>
  )
}

export default AppItemCard;
