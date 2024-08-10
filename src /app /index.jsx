import React from 'react';
import {
  CircleUserRound,
  Home,
  ListTodo,
  Notebook,
  Settings,
  Settings2,
} from '@tamagui/lucide-icons';
import { collection, getDocs } from 'firebase/firestore/lite';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Button, SizableText, Stack, Tabs, Text, XStack, YStack } from 'tamagui';
import { NavigationContainer } from '@react-navigation/native';


import { db } from '../support/firebase';
import ClassesScreen from './MainClassesScreen';
import HomeScreen from './HomeScreen';
import PlannerScreen from './PlannerScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import Fall2024 from './Fall2024';
import YourClasses from './YourClasses';
import MainClassesScreen from './MainClassesScreen';
import ENGR1181 from './ENGR1181';

const Tab = createMaterialBottomTabNavigator();
const tealBlue = '#2F7B80';
const darkTealSelection = '#133335';

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor='white'
      inactiveColor='white'
      barStyle={{ backgroundColor: tealBlue }} 
      activeIndicatorStyle={{ backgroundColor: darkTealSelection}}
    >
      <Tab.Screen 
        name="Planner" 
        component={PlannerScreen} 
        options={{ tabBarIcon: ({ color }) => (<ListTodo color={color} />)}} 
      />
      <Tab.Screen 
        name="Classes" 
        component={MainClassesScreen} 
        options={{ tabBarIcon: ({ color }) => (<Notebook color={color} />) }} 
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color }) => (<Home color={color} />) }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarIcon: ({ color }) => (<CircleUserRound color={color} />)}} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ tabBarIcon: ({ color }) => (<Settings color={color} />) }}
         
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
