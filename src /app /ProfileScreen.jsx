import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, Text, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { db } from '../support/firebase';
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

export default function ProfileScreen() {
  const navigation = useNavigation();

    return (
      <XStack onPress={() => (navigation.navigate('friends'))}>
        <Image source={require('../../assets/profile.png')} style={{marginLeft: -20}}/>
      </XStack>
         );
}
