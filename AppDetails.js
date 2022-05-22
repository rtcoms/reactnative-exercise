import React from 'react';
import { Pressable, Avatar, ScrollView, VStack, Center, Box, Heading, HStack, Checkbox, Input, IconButton, Icon, Text, useToast, Feather, Entypo, Image } from 'native-base';

function AppDetails({ navigation, route }) {
  console.log('---app details');
  console.log(route.params.item);
  // console.log(navigation);
  const item = route.params.item;

  return (
    <Box>
      <VStack space={100}>
        <Avatar size="100px" source={{ uri: item.image}} />
        <Text>{item.description}</Text>
      </VStack>
    </Box>
  )
}

export default AppDetails;
