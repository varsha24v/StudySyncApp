import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ToDoList from './ToDoList';
import AddItem from './AddItem';
import WeeklyCalendar from './WeeklyCalendar';
import Fall2024 from './Fall2024';
import MainClassesScreen from './MainClassesScreen';
import YourClasses from './YourClasses';
import TabNavigator from './index'; // Import the TabNavigator
import ENGR1181 from './ENGR1181';
import friends from './friends';
import edit from './edit';

export type RootStackParamList = {
  Main: undefined;
  ToDoList: undefined;
  WeeklyCalendar: undefined;
  AddItem: { source: 'ToDoList' | 'WeeklyCalendar' };
  Fall2024: undefined;
  MainClassesScreen: undefined;
  YourClasses: undefined;
  ENGR1181: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="WeeklyCalendar" component={WeeklyCalendar} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="Fall2024" component={Fall2024} />
        <Stack.Screen name="MainClassesScreen" component={MainClassesScreen} />
        <Stack.Screen name="YourClasses" component={YourClasses} />
        <Stack.Screen name="ENGR1181" component={ENGR1181}/>
        <Stack.Screen name="friends" component={friends}/>
        <Stack.Screen name="edit" component={edit}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
