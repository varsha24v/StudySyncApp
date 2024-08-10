import React from 'react';
import { TouchableOpacity, FlatList} from 'react-native';
import { Appbar, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator';
import { XStack, YStack, Button, View } from 'tamagui';
import { Atom, Backpack, Beaker, Book, ChevronRight, ChevronsRight, ClipboardList, Cog, LayoutList, PiSquare, PlusCircle, SquareAsterisk } from "@tamagui/lucide-icons";
import {Avatar, NativeBaseProvider} from "native-base";
import { createAvatar } from '@dicebear/core';
import { icons } from '@dicebear/collection';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import TabNavigator from '.';

const Tab = createMaterialBottomTabNavigator();

const data2 = [
    { id: '1', name: 'ENGR 1181', friends: '1' },
    { id: '2', name: 'MATH 1172', friends: '2' },
    { id: '3', name: 'PHYSICS 1250', friends: '5' },
    { id: '4', name: 'GENED 1200', friends: '3' }
];

const SetIcon = (mode) => {
    if (mode == "2") {
        return <PiSquare justifyContent="center" size={70} />
    } else if (mode == "3") {
        return <Atom justifyContent="center" size={70} />
    }
    else if (mode == "4") {
        return <Backpack justifyContent="center" size={70} />}
    else {
        return <Cog justifyContent="center" size={70}/>
    }
}

const ClassItem = ({ id, title, friends }) => (
    <>
    <XStack flex={1} width="100%" padding={10} alignItems="center" justifyContent="space-between" >
        <XStack alignItems="center">
            {SetIcon(id)}
            <YStack marginLeft={20}>
                <Text variant="titleLarge" style={{ marginBottom: 8 }}>{title}</Text>
                <XStack alignItems="center">
                    <Text variant='bodyLarge'>{friends} friends</Text>
                </XStack>
            </YStack>
        </XStack>
        <ChevronsRight justifyContent="flex-end" size={40}/>
    </XStack>
    <Divider/>
    </>
);

const YourClasses: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <Appbar.Header style={{backgroundColor:"#FFFFFF"}}>
                <Appbar.BackAction onPress={() => navigation.navigate("MainClassesScreen")} />
                <Text variant='headlineLarge'>Your Classes</Text>
            </Appbar.Header>
            <YStack flex={1} margin={20} alignItems='flex-start'>
                <XStack space="$2" marginBottom={20}>
                    <Button onPress={() => navigation.navigate("MainClassesScreen")}><Text>Discover</Text></Button>
                    <Button themeInverse onPress={() => navigation.navigate("YourClasses")} backgroundColor={"#EF6466"}>Your Classes</Button>
                    <Button onPress={() => navigation.navigate("friends")}>Classmates</Button>
                </XStack>
                <FlatList
                    data={data2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <View onPress={() => navigation.navigate("ENGR1181")}><ClassItem id = {item.id} title={item.name} friends={item.friends}/></View>}
                    ListFooterComponent={() => <PlusCircle justifyContent="center" alignSelf="center" size={40} marginTop={10} color={"#EF6466"}
                                                    onPress={() => navigation.navigate('Fall2024')}/>}
                />
            </YStack>
        </>
    );
};

export default YourClasses;
