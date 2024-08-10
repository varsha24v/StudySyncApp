import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, XStack, YStack } from 'tamagui';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useNavigation } from '@react-navigation/native';

const logoRed = '#EF6466'
const whiteGrey = '#EFEFEF'

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const HomeScreen = () => {
    const { navigate } = useNavigation();
    const currentDay = new Date().getDay(); // Get the current day as a number (0-6)
    const currentDate = new Date().getDate(); // Get the current date (1-31)
    const confettiRef = useRef<ConfettiCannon>(null);

    useEffect(() => {
        if (confettiRef.current) {
            confettiRef.current.start();
        }
    }, []);

    return (
        <YStack flex={1}>
            <Text style={{ fontFamily: 'Arial Rounded MT bold', top: 80, left: 25 }} fontSize={50} color={logoRed}>
                Hi Noor!
            </Text>
            <View style={styles.calendarHeader}>
                {daysOfWeek.map((day, index) => (
                    <View key={index} style={styles.dayContainer}>
                        <Text style={[styles.dayText, index === currentDay && styles.currentDayText]}>{day}</Text>
                        <Text style={styles.dateText}>{index === currentDay ? currentDate : ''}</Text>
                    </View>
                ))}
            </View>
            <XStack
                style={{
                    top: 130,
                    left: 22,
                    width: 345,
                    height: 150,  // Adjust height as needed
                    backgroundColor: whiteGrey,
                    padding: 10,
                    borderRadius: 10
                }}
            >
                <YStack>
                    <ConfettiCannon
                        count={50}
                        origin={{x: -10, y: 0}}
                        autoStart={true}
                        fadeOut={true}
                        fallSpeed={5000}
                        ref={confettiRef}
                    />
                    <Text style={{ fontFamily: 'Arial Rounded MT bold' }} alignContent="center" fontSize={14} color="#2F7B80" lineHeight={35}>
                        Another Day. Another Slay.
                    </Text>
                    <Text style={{ fontFamily: 'Arial Rounded MT bold' }} alignContent="center" fontSize={14} color="#2F7B80" lineHeight={35}>
                        You Are Exactly Where You Need To Be. You Are Going To Be More Than Okay!
                    </Text>
                </YStack>
            </XStack>
        </YStack>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    calendarHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
        backgroundColor: whiteGrey,
        borderRadius: 10,
        top: 120,
        left: 22,
        width: 345,
    },
    dayContainer: {
        alignItems: 'center',
    },
    dayText: {
        fontFamily: 'Arial Rounded MT bold',
        fontSize: 16,
        fontWeight: 'bold',
    },
    currentDayText: {
        fontFamily: 'Arial Rounded MT bold',
        color: '#EF6466',
    },
    dateText: {
        fontFamily: 'Arial Rounded MT bold',
        fontSize: 16,
        marginTop: 4,
        color: '#EF6466',
    },
    courseList: {
        padding: 16,
        paddingBottom: 200,
        top: 90,
        width: 250,
    },
});

export default HomeScreen;
