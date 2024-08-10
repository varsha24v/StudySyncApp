import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator';
import { XStack } from 'tamagui';


type AddItemRouteProp = RouteProp<RootStackParamList, 'AddItem'>;
type AddItemNavigationProp = StackNavigationProp<RootStackParamList, 'AddItem'>;

const AddItem = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');

    const navigation = useNavigation<AddItemNavigationProp>();
    const route = useRoute<AddItemRouteProp>();
    const sourceScreen = route.params.source;

    return (
        <View style={styles.container}>
            <XStack>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        // Navigate back to the source screen after adding an item
                        navigation.navigate(sourceScreen);
                    }}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Add Item</Text>
            </XStack>
            
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Task</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter task name"
                    value={name}
                    onChangeText={setName}
                />
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Date</Text>
                <TextInput
                    style={styles.input}
                    placeholder="##/##/####"
                    value={date}
                    onChangeText={setDate}
                />
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Start Time</Text>
                <TextInput
                    style={styles.input}
                    placeholder="00:00 am/pm"
                    value={startTime}
                    onChangeText={setStartTime}
                />
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>End Time</Text>
                <TextInput
                    style={styles.input}
                    placeholder="00:00 am/pm"
                    value={endTime}
                    onChangeText={setEndTime}
                />
                <View style={styles.horizontalLine} />
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Location</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter location of task"
                    value={location}
                    onChangeText={setLocation}
                />
                <View style={styles.horizontalLine} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        top: 50,
    },
    title: {
        fontFamily: 'Arial Rounded MT bold',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        left: 75,
    },
    headingContainer: {
        marginVertical: 10,
    },
    heading: {
        fontFamily: 'Arial Rounded MT bold',
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#2F7B80',
    },
    horizontalLine: {
        borderBottomColor: '#2F7B80',
        borderBottomWidth: 1,
        marginTop: 5,
    },
    input: {
        height: 40,
        borderColor: '#91BCBF',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#EF6466',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: 70,
        height: 35,
        top: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AddItem;
