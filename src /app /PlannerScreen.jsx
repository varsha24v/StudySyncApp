import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Button, YStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import TabNavigator from './index';
import { CircleUserRound, Home, Notebook, Settings } from '@tamagui/lucide-icons';
import { Appbar,Text } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const tealBlue = '#2F7B80';
const darkTealSelection = '#133335';

const PlannerScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>Planner</Text>
            </View>
            
            <Image
                source={require('../../assets/peopleplanning.png')}
                style={styles.image}
            />

            <YStack flex={1} justifyContent='center' alignItems='center'>
                <Button
                    onPress={() => navigation.navigate("Goals")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Goals</Text>
                </Button>
                <Button
                    onPress={() => navigation.navigate("WeeklyCalendar")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Weekly Calendar</Text>
                </Button>
                <Button
                    onPress={() => navigation.navigate('ToDoList')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>To-Do List</Text>
                </Button>
                <Button
                    onPress={() => navigation.navigate('index')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Home</Text>
                </Button>
            </YStack>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    headerText: {
        fontFamily: 'Arial Rounded MT bold',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
        top: 45,
        left: 5,
    },
    image: {
        top: 30,
        width: 350,
        height: 350,
        marginBottom: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    button: {
        top: 0,
        left: 0,
        width: 340,
        height: 50,
        padding: 10,
        borderRadius: 45,
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: 'Arial Rounded MT bold',
        fontSize: 20,
        color: '#EF6466',
        textAlign: 'center',
    },
});

export default PlannerScreen;
