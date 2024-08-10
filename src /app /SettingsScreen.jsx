import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, Text, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { db } from '../support/firebase';
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

export default function SettingsScreen() {
  const navigation = useNavigation();
    return (
      <XStack onPress={() => navigation.navigate("edit")}>
        <View style={{backgroundColor: "#EF6466"}}>
        <Image source={require('../../assets/settings.png')} style={{marginLeft:-17, top:20}}/>
      </View>
      </XStack>

  );
}
