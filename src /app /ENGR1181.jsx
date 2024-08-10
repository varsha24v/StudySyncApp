import React, { useRef, useState } from "react";
import { Appbar, Card, Divider, PaperProvider, shadow, Text } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from '@react-navigation/native'
import { Adapt, AlertDialog, Button, Circle, Dialog, Portal, ScrollView, Sheet, VisuallyHidden, XStack, YStack } from "tamagui";
import { Box, FlatList } from "native-base";
import { Beaker, Book, ChevronDown, ChevronUp, ClipboardList, LayoutList } from "@tamagui/lucide-icons";
import { Modal, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TimerPicker, TimerPickerModal } from "react-native-timer-picker";

const Tab = createMaterialBottomTabNavigator();

const allAssign = [
    {id: '2', name: 'Homework 2', avgTime: "~37 min", responses: 11},
    {id: '3', name: 'Project 1', avgTime: "~2hr 30 min", responses: 52},
    {id: '4', name: 'Lab Report 1', avgTime: "~3hr", responses: 39},
    {id: '5', name: 'Quiz 1 Review', avgTime: "~32 min", responses: 22}
]

const data2=[
    {category: "All", assignments: allAssign},
    {category: "Homework", assignments: allAssign},
    {category: "Labs", assignments: allAssign},
    {category: "Projects", assigments: allAssign},
    {category: "Exams", assignments: allAssign}
]

const SetIcon = (mode) => {
    if (mode == "2") {
        return <Book size={35} color="white"/>
    } else if (mode == "3") {
        return <ClipboardList size={35} color="white"/>
    }
    else if (mode == "4") {
        return <Beaker size={35} color="white"/>}
    else {
        return <LayoutList size={35} color="white"/>
    }
}

const AssignmentCard = ({id, title, averageTime, responses}) => (
    <Card style={{marginLeft:0, backgroundColor:"#ffffff", width:350, alignSelf:"center"}} key={title}>
    <Card.Content>
    <XStack flex = {1} justifyContent="space-between">
    <Circle size={65} backgroundColor="#2F7B80" marginRight={10} marginLeft={-7}>{SetIcon(id)}</Circle> 
    <YStack justifyContent="space-between" marginRight={30} alignItems="center">
        <Text variant="titleLarge">{title}</Text>
        <Text
            style={{paddingVertical: 10,
                    paddingHorizontal: 18,
                    borderWidth: 2,
                    borderRadius: 18,
                    fontSize: 10,
                    overflow: "hidden",
                    borderColor: "#FFB13C",
                    color: "#FFB13C",
                    }}>
            Log Time
        </Text>
    </YStack>
    <YStack justifyContent="center" alignItems="center">
        <Text variant="headlineMedium" style={{color: "#FFB13C"}}>{averageTime}</Text>
        <Text variant = "bodySmall">{responses} responses</Text>
    </YStack>
    </XStack>
    <ChevronDown size={35} alignSelf="center" marginTop={20}/>
    </Card.Content>
    </Card>
)

const ENGR1181: React.FC = () => {
    const navigation = useNavigation();
    const [subjectChoice, setSubjectChoice] = useState("All");
    const [openContainer, setOpenContainer] = useState(false);
    const [visible, setVisible] = React.useState(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const [showPicker, setShowPicker] = useState(false);
    const [timePicked, setTimePicked] = useState();
    const [data, setData] = useState([
        {id: '1', name: 'Homework 1', avgTime: 45, responses: 20}]);
  
    const fakeData = data;
    const calcAvg = (hours:number, minutes:number, avg: number, responses:number) => {
      const totalTime = hours*60 + minutes;
      const newAvg = Math.ceil((avg*responses +totalTime)/(responses+1));
      fakeData[0].avgTime = newAvg;
      fakeData[0].responses = responses+1;
      setData(fakeData); 
    }

    return (
        <><Appbar.Header style={{backgroundColor:"#FFFFFF"}}>
            <Appbar.BackAction onPress={() => navigation.navigate("YourClasses")} color="black"/>
            <Text variant='headlineLarge' style={{ marginRight: 120 }}>ENGR 1181</Text>
            <Appbar.Action icon="magnify" theme={{}} />
        </Appbar.Header>
        <YStack margin={20} justifyContent='center'>
                <ScrollView horizontal padding={10}>
                    <XStack space="$2" marginBottom={25} height={50}>
                        {data2.map(category => {
                            return (
                                <Button key={category.category} themeInverse={subjectChoice === category.category}
                                    onPress={() => {
                                        setSubjectChoice(category.category)}}
                                        style={{ backgroundColor: subjectChoice === category.category ? '#EF6466' : '#F5F5F5' }}>{category.category}</Button>
                            );
                        })}
                    </XStack>
                </ScrollView>
                <ScrollView>
                <YStack flex={1} alignContent="center" justifyContent="center">                        
                    <Card style={{backgroundColor:"#ffffff", marginBottom: 20, width:350, marginLeft:2, marginTop:2}} key={data[0].name}>
                    <Card.Content>
                <YStack alignItems="center" borderColor="black">
                    <XStack marginBottom={20}>
                    <Circle size={65} backgroundColor="#2F7B80" marginRight={10}><Book size={35} color="white"/></Circle> 
                    <YStack justifyContent="space-between" marginRight={40}>
                        <Text variant="titleLarge">{data[0].name}</Text>
                        <View style={{backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center"}}>
               <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}>
            <View style={{alignItems: "center"}}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setShowPicker(true)}>
                    <View>
                        <Text
                            style={{paddingVertical: 10,
                            paddingHorizontal: 18,
                            borderWidth: 2,
                            borderRadius: 18,
                            fontSize: 10,
                            overflow: "hidden",
                            borderColor: "#FFB13C",
                            color: "#FFB13C"
                            }}>
                            Log Time
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <VisuallyHidden></VisuallyHidden>
        <TimerPickerModal
            visible={showPicker}
            setIsVisible={setShowPicker}           
            hideSeconds
            hourLabel="hr"
            minuteLabel="min"
            secondLabel="sec"
            LinearGradient={LinearGradient}
            styles={{
              pickerItem: {
                fontSize: 30,
              },
              pickerLabel: {
                fontSize: 20,
                right: -30,
              },
              pickerLabelContainer: {
                width: 60,
              },
              pickerItemContainer: {
                width: 120,
              },
            }}
            onConfirm={(timePicked) => {
              setShowPicker(false);
              calcAvg(timePicked.hours, timePicked.minutes, data[0].avgTime, data[0].responses)
            } }
            onCancel={() => setShowPicker(false)}            
            />
      </View>                    
      </YStack>
                    <YStack justifyContent="center" alignItems="center">
                        <Text variant="headlineMedium" style={{color: "#FFB13C"}}>~{data[0].avgTime} min</Text>
                        <Text variant = "bodySmall" >{data[0].responses} responses</Text>
                    </YStack>
                    </XStack>
                    {openContainer &&                     
                        <>
                        <Text variant="titleMedium">A typical A- student spent 60 minutes</Text>
                        <Text variant="titleMedium">A typical C student spent 25 minutes</Text>                        
                        </>
                    }
                        {openContainer ? <ChevronUp size={35} onPress={() => setOpenContainer(!openContainer)}/>: <ChevronDown size={35} onPress={() => setOpenContainer(!openContainer)} />}
                    </YStack> 
                    </Card.Content>
                </Card>
                {allAssign.map(assignment => {
                    return(
                        <View key={assignment.id} style={{marginBottom: 20}}>
                    <AssignmentCard id = {assignment.id} title={assignment.name} responses={assignment.responses} averageTime={assignment.avgTime}/></View>
                )})}
                </YStack>
                </ScrollView>
            </YStack></>
    );
}

export default ENGR1181;
