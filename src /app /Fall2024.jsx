import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from "react";
import { Card, Title, Appbar,Text, IconButton, Icon, Divider } from 'react-native-paper';
import { Avatar, Button, Label, ScrollView, SizableText, Switch, Tabs, View, XStack, YStack } from 'tamagui';
import TabNavigator from ".";
import { SquareAsterisk, ChevronsRight, PlusCircle, AlignVerticalJustifyEnd, Plus, PencilLine, Atom, Backpack, Cog, PiSquare } from "@tamagui/lucide-icons";
import { FlatList } from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const Tab = createMaterialBottomTabNavigator();

const allClasses = [            
    {id: '1', name: 'MATH 1151', friends: '0', mode:'2'},
    {id: '2', name: 'MATH 1172', friends: '7', mode:'2'},
    {id: '3', name: 'MATH 2173', friends: '3', mode:'2'},
    {id: '4', name: 'MATH 2174', friends: '2', mode:'2'},
    {id: '5', name: 'MATH 2568', friends: '4', mode:'2'},
    {id: '1', name: 'ENGR 1181', friends: '3', mode:'1'},
    {id: '2', name: 'ENGR 1182', friends: '5', mode:'1'},
    {id: '3', name: 'ENGR 1221', friends: '1', mode:'1'},
    {id: '4', name: 'ENGR 1281', friends: '2', mode:'1'},
    {id: '5', name: 'ENGR 1282', friends: '4', mode:'1'},
    {id: '1', name: 'PHYSICS 1200', friends: '1', mode:'3'},
    {id: '2', name: 'PHYSICS 1201', friends: '2', mode:'3'},
    {id: '3', name: 'PHYSICS 1250', friends: '3', mode:'3'},
    {id: '4', name: 'PHYSICS 1251', friends: '2', mode:'3'},
    {id: '1', name: 'ENGLISH 1110', friends: '2', mode:'5'},
    {id: '2', name: 'ENGLISH 3011', friends: '3', mode:'5'}]

const data2 = [ {subject: "ALL", courses: allClasses},
    { subject: "MATH", 
        courses: [
            {id: '1', name: 'MATH 1151', friends: '0', mode:'2'},
            {id: '2', name: 'MATH 1172', friends: '7', mode:'2'},
            {id: '3', name: 'MATH 2173', friends: '3', mode:'2'},
            {id: '4', name: 'MATH 2174', friends: '2', mode:'2'},
            {id: '5', name: 'MATH 2568', friends: '4', mode:'2'}
        ]
    },
    { subject: "ENGR", 
        courses: [
            {id: '1', name: 'ENGR 1181', friends: '3', mode:'1'},
            {id: '2', name: 'ENGR 1182', friends: '5', mode:'1'},
            {id: '3', name: 'ENGR 1221', friends: '1', mode:'1'},
            {id: '4', name: 'ENGR 1281', friends: '2', mode:'1'},
            {id: '5', name: 'ENGR 1282', friends: '4', mode:'1'}
        ]
    },
    { subject: "PHYSICS", 
        courses: [
            {id: '1', name: 'PHYSICS 1200', friends: '1', mode:'3'},
            {id: '2', name: 'PHYSICS 1201', friends: '2', mode:'3'},
            {id: '3', name: 'PHYSICS 1250', friends: '3', mode:'3'},
            {id: '4', name: 'PHYSICS 1251', friends: '2', mode:'3'}
        ]
    },
    { subject: "ENGLISH", 
        courses: [
            {id: '1', name: 'ENGLISH 1110', friends: '2', mode:'5'},
            {id: '2', name: 'ENGLISH 3011', friends: '3', mode:'5'}
        ]
    },
];

const SetIcon = (mode) => {
    if (mode == "2") {
        return <PiSquare justifyContent="center" size={80} color={"#2F7B80"}/>
    } else if (mode == "3") {
        return <Atom justifyContent="center" size={80} color={"#FFB13C"}/>
    }
    else if (mode == "4") {
        return <Backpack justifyContent="center" size={80} color={"#2F7B80"}/>}
    else if (mode == "1") {
        return <Cog justifyContent="center" size={80} color={"#EF6466"}/>
    }
    else {
        return <PencilLine justifyContent="center" size={70} color={"#2F7B80"}/>
    }
}

const ClassItem = ({ title, friends, id }) => (
    <>
    <XStack flex={1} width="100%" padding={10} alignItems="center" justifyContent="space-between">
        <XStack alignItems="center">
        {SetIcon(id)}
            <YStack marginLeft={10}>
                <Text variant="titleLarge" style={{ marginBottom: 10 }}>{title}</Text>
                <XStack alignItems="center">
                    <Text>{friends} friends</Text>
                </XStack>
            </YStack>
        </XStack>
        <Plus justifyContent="flex-end" size={35} color={"#EF6466"}/>
    </XStack>
    <Divider/>
    </>
);

const Fall2024: React.FC = () => {
    const navigation = useNavigation();
    const [subjectChoice, setSubjectChoice] = useState("ALL");
    const [subjectData, setSubjectData] = useState(allClasses);
    const [native, setNative] = React.useState(false)
    
    const getSubjectData = (subject) => {
        const tempData = data2.find(item => item.subject === subject);
        if (tempData) {
            setSubjectData(tempData.courses);
        }
    };

    const changeSubject = (newSubject) => {
        setSubjectChoice(newSubject);
        getSubjectData(newSubject);
        
    };

    return (
        <>
            <Appbar.Header style={{backgroundColor:"#FFFFFF"}}>
            <Appbar.BackAction onPress={() => navigation.navigate("MainClassesScreen")}/>
            <Text variant='headlineLarge' style={{marginRight: 140}}>Fall 2024</Text>        
            <Appbar.Action icon="magnify" theme={{}}/>
            </Appbar.Header>
            <YStack margin={20} justifyContent='center' alignItems='flex-start'> 
                <ScrollView horizontal>        
                    <XStack space="$2" marginBottom={15} height={50}>
                        {data2.map(category => {
                            return (
                                <Button key={category.subject} themeInverse={subjectChoice === category.subject}
                                    onPress={() => {changeSubject(category.subject)}}
                                    style={{ backgroundColor: subjectChoice === category.subject ? '#EF6466' : '#F5F5F5' }}>{category.subject}</Button>
                            )
                        })}
                    </XStack>
                </ScrollView>
                <FlatList
                data={subjectData}
                extraData={subjectData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ClassItem title={item.name} friends={item.friends} id={item.mode}/>}
                />
            </YStack>
        </>
    );
}

export default Fall2024;
