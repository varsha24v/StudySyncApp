import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Appbar, Text, Card} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator';
import { XStack, YStack, ScrollView, Button} from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient'
import { ChevronRight, ChevronsRight, PlusCircle, SquareAsterisk, History, Star } from "@tamagui/lucide-icons";
import {Avatar, NativeBaseProvider} from "native-base";
import { AvatarGenerator } from "random-avatar-generator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import TabNavigator from './index';

const Tab = createMaterialBottomTabNavigator();

type MainClassesProp = StackNavigationProp<RootStackParamList, 'MainClassesScreen'>;

const MainClassesScreen: React.FC = () => {
    const navigation = useNavigation<MainClassesProp>();
    return (
        <>           
            <Appbar.Header style={{backgroundColor:"#FFFFFF"}}>
                <Appbar.Action icon="home" onPress={() => navigation.navigate("index")} color='#2F7B80' size={40}/>
                <Text variant='headlineLarge' style={{marginRight: 145}}>Discover</Text>
                <Appbar.Action icon="magnify" />
            </Appbar.Header>
            <YStack flex={1} margin={20} justifyContent='center' alignItems='flex-start'>
                <XStack space="$2" marginBottom={20}>
                    <Button themeInverse onPress={() => navigation.navigate("MainClassesScreen")} backgroundColor={"#EF6466"}>Discover</Button>
                    <Button onPress={() => navigation.navigate("YourClasses")}>Your Classes</Button>
                    <Button onPress={() => {}}><Text>Classmates</Text></Button>
                </XStack>
                <XStack>
                    <Text style={{ marginBottom: 10 }} variant='titleMedium'>All Semesters</Text>
                </XStack>
                <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, paddingBottom:40 }}>
                    <XStack alignContent='flex-end' padding={2}>
                        <Card style={{ marginRight: 20, width: 200, height:190 }} onPress={() => navigation.navigate('Fall2024')}>
                            <Card.Cover source={require('../../assets/fall2024(1).png')} />
                        </Card>
                        <Card style={{ marginRight: 20, width: 200, height:190 }}>
                            <Card.Cover source={require('../../assets/spring2025.png')}/>
                        </Card>
                        <Card style={{ marginRight: 20, width: 200, height:190 }}>
                        <Card.Cover source={require('../../assets/fall2025.png')}/>
                        </Card>
                    </XStack>
                </ScrollView>
                <XStack>
                    <Text style={{ marginTop: 20, marginBottom: 10 }} variant='titleMedium'>Your Semesters</Text>
                </XStack>
                <ScrollView width={350}>
                    <YStack>
                        <XStack style={{ marginBottom: 20 }}>
                            <Card style={{ width: 160, marginRight: 20, marginLeft: 2, marginTop: 2,backgroundColor:"#f89e69" }} onPress={() => navigation.navigate('YourClasses')}>
                                <Card.Title title="Fall 2024" subtitle="5 classes" titleStyle={{color: "white"}} subtitleStyle={{color: "white"}}/>
                                <Star marginLeft={15} marginBottom={10} color={"white"}/>
                            </Card>
                            <Card style={{ width: 160, marginTop: 2, backgroundColor:"#f97da1" }}>
                                <Card.Title title="Spring 2025" subtitle="4 classes" titleStyle={{color: "white"}} subtitleStyle={{color: "white"}}/>
                                <ChevronsRight marginLeft={15} marginBottom={10} color={"white"}/>
                            </Card>
                        </XStack>
                        <XStack style={{ marginBottom: 20 }}>
                            <Card style={{ width: 160, marginRight: 20, marginLeft: 2, marginTop: 2, backgroundColor:"#f3715f" }}>
                                <Card.Title title="Fall 2023" subtitle="6 classes" titleStyle={{color: "white"}} subtitleStyle={{color: "white"}}/>
                                <History marginLeft={15} marginBottom={10} color={"white"}/>
                            </Card>
                            <Card style={{ width: 160, backgroundColor:"#f3715f" }}>
                                <Card.Title title="Spring 2024" subtitle="3 classes" titleStyle={{color: "white"}} subtitleStyle={{color: "white"}}/>
                                <History marginLeft={15} marginBottom={10} color={"white"}/>
                            </Card>
                        </XStack>
                    </YStack>
                </ScrollView>
            </YStack>
        </>
    );
};

export default MainClassesScreen;
