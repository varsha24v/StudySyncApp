import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, XStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator'; // Import RootStackParamList
import { Button } from "react-native-paper";

type WeeklyCalendarNavigationProp = StackNavigationProp<RootStackParamList, 'WeeklyCalendar'>;

type Course = {
  time: string;
  title: string;
  room: string;
  color: string;
};

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const courses: Course[] = [
  {
    time: '11:35 - 13:05',
    title: 'Mathematics',
    room: 'Room 6-205',
    color: '#FFC107'
  },
  {
    time: '13:15 - 14:45',
    title: 'Biology',
    room: 'Room 2-168',
    color: '#E0E0E0'
  },
  {
    time: '15:10 - 16:40',
    title: 'Geography',
    room: 'Room 1-403',
    color: '#E0E0E0'
  }
];

const WeeklyCalendar = () => {
  const navigation = useNavigation<WeeklyCalendarNavigationProp>();
  const { navigate } = useNavigation();

  const currentDay = new Date().getDay(); // Get the current day as a number (0-6)
  const currentDate = new Date().getDate(); // Get the current date (1-31)

  const renderCourse = ({ item }: { item: Course }) => (
    <View style={[styles.courseCard, { backgroundColor: item.color }]}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseRoom}>{item.room}</Text>
    </View>
  );
  const renderTime = ({ item }: { item: Course }) => (
    <View style={[styles.courseCard]}>
      <Text style={styles.courseTitle}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <XStack alignItems="center">
          <Button style={styles.backButton} 
                          onPress={() => {
                            navigation.navigate('PlannerScreen')}}>
            <Text style={styles.backButtonText}>{'<'}</Text>
          </Button>
          <Text style={styles.headerText}>Weekly Calendar</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('AddItem', { source: 'WeeklyCalendar' });
            }}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </XStack>
      </View>
      <View style={styles.calendarHeader}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={[styles.dayText, index === currentDay && styles.currentDayText]}>{day}</Text>
            <Text style={styles.dateText}>{index === currentDay ? currentDate : ''}</Text>
          </View>
        ))}
      </View>
      <XStack>
        <Text  style={{fontFamily: 'Arial Rounded MT bold', top: 80, left: 30}} fontSize={15}  color="#2F7B80">
          Time
        </Text>
        <Text  style={{fontFamily: 'Arial Rounded MT bold', top: 80, left: 110}} fontSize={15}  color="#2F7B80">
          Activity
        </Text>
      </XStack>
      <XStack>
        <FlatList
          data={courses}
          renderItem={renderTime}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles.timeList}
        />
        <FlatList
          data={courses}
          keyExtractor={(item) => item.title}
          renderItem={renderCourse}
          contentContainerStyle={styles.courseList}
        />
      </XStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontFamily: 'Arial Rounded MT bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    top: 15,
    left: 120,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  button: {
    backgroundColor: '#EF6466',
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    right: 10,
    top: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginHorizontal: 25,
    width: '90%',
    alignSelf: 'center',
    top: 45,
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
    width: 250,
  },
  timeList: {
    padding: 16,
    paddingBottom: 200,
    //backgroundColor: '#FFFFFF',
    width: 120,
  },
  courseCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    top: 100,
  },
  courseTitle: {
    fontFamily: 'Arial Rounded MT bold',
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseRoom: {
    fontFamily: 'Arial Rounded MT bold',
    marginTop: 4,
    fontSize: 14,
    color: '#757575',
  },
});

export default WeeklyCalendar;
