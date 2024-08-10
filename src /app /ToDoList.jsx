import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, ListRenderItem } from 'react-native';
import { Text, XStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator'; // Import RootStackParamList

type ToDoListNavigationProp = StackNavigationProp<RootStackParamList, 'ToDoList'>;

type ToDoItem = {
  id: string;
  title: string;
  date: string;
  completed: boolean;
};

const data: ToDoItem[] = [
  { id: '1', title: 'Go to Gym', date: '2 Days ago', completed: false },
  { id: '2', title: 'Clean Room', date: '1 Days ago', completed: false },
  { id: '3', title: 'Pay Rent', date: '12 Days ago', completed: true },
];

const ToDoList: React.FC = () => {

  const navigation = useNavigation();
  
  const renderItem: ListRenderItem<ToDoItem> = ({ item }) => (
    <View style={[styles.itemContainer, item.completed ? styles.completedItem : styles.incompleteItem]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
          <XStack>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.navigate('PlannerScreen')}}
            >
              <Text style={styles.backButtonText}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>To Do List</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('AddItem', { source: 'ToDoList' });
                }}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </XStack>
      </View>
      <Text  style={{fontFamily: 'Arial Rounded MT bold', left: 10, top: 80}} alignContent = "center" fontSize={18}  color = "#000000">
          Incomplete: 
      </Text>
      <FlatList
        style={{left: 10, top: 90, width: 340, height: 70}}
        data={data.filter(item => !item.completed)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text  style={{fontFamily: 'Arial Rounded MT bold', left: 10, top: 5}} alignContent = "center" fontSize={18}  color = "#000000">
          Complete: 
      </Text>
      <FlatList
        style={{left: 10, top: 20, width: 340, height: 70}}
        data={data.filter(item => item.completed)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
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
    marginVertical: 20,
    top: 45,
    left: 130,
},
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  completedItem: {
    backgroundColor: '#FFF5E1',
  },
  incompleteItem: {
    backgroundColor: '#FFE4E1',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#C4C4C4',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 50,
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
    top: 55,
    left: 220,
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
},
});

export default ToDoList;
