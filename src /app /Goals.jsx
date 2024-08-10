// goals.tsx
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle, G, Linecap } from 'react-native-svg';
import { XStack } from 'tamagui';

interface CircularProgressGraphProps {
  progress1: number;
  progress2: number;
  progress3: number;
}

const CircularProgressGraph: React.FC<CircularProgressGraphProps> = ({ progress1, progress2, progress3 }) => {
  const size = 200;
  const strokeWidth = 10;
  const radius1 = (size - strokeWidth) / 2; //red
  const radius3 = (size - strokeWidth * 3) / 3; //teal
  const radius2 = (size - strokeWidth * 5) / 2; //yellow
  const circumference1 = 2 * Math.PI * radius1;
  const circumference2 = 2 * Math.PI * radius2;
  const circumference3 = 2 * Math.PI * radius3;

  const circleProps = {
    strokeLinecap: 'round' as Linecap,
    strokeDasharray: `${circumference1} ${circumference1}`,
  };

  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <Svg width={size} height={size}>
        <G rotation="-90" originX={size / 2} originY={size / 2}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius1}
            stroke="#F5F5F5"
            strokeWidth={strokeWidth}
            fill="none"
            {...circleProps}
            strokeDashoffset={(0/100) * circumference1}
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius2}
            stroke="#F5F5F5"
            strokeWidth={strokeWidth}
            fill="none"
            {...circleProps}
            strokeDashoffset={(0/100) * circumference1}
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius3}
            stroke="#F5F5F5"
            strokeWidth={strokeWidth}
            fill="none"
            {...circleProps}
            strokeDashoffset={(0/100) * circumference1}
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius1}
            stroke="#EF6466"
            strokeWidth={strokeWidth}
            fill="none"
            {...circleProps}
            strokeDashoffset={(1 - progress1 / 100) * circumference1}
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius2}
            stroke="#2F7B80"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference2} ${circumference2}`}
            strokeDashoffset={(1 - progress2 / 100) * circumference2}
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius3}
            stroke="#F5BB62"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference3} ${circumference3}`}
            strokeDashoffset={(1 - progress3 / 100) * circumference3}
          />
        </G>
      </Svg>
    </View>
  );
};

interface GoalBoxProps {
  goal: { title: string; color: string };
  progress: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const GoalBox: React.FC<GoalBoxProps> = ({ goal, progress, onIncrement, onDecrement }) => {
  return (
    <View style={[styles.goalBox, { backgroundColor: goal.color }]}>
      <Text style={styles.goalText}>{goal.title}</Text>
      <TextInput style={styles.goalInput} value={`${progress}`} editable={false} />
      <View style={styles.buttonContainer}>
        <Button title="⊕" color= '#FFFFFF' onPress={onIncrement} />
        <Button title="⊖" color= '#FFFFFF' onPress={onDecrement} />
      </View>
    </View>
  );
};

const Goals: React.FC = () => {
  const navigation = useNavigation();
  
  const [progress1, setProgress1] = useState(10);
  const [progress2, setProgress2] = useState(10);
  const [progress3, setProgress3] = useState(10);

  return (
    <View style={styles.container}>
      <XStack>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.navigate('PlannerScreen'); // Adjust the screen name as needed
              }}
            >
              <Text style={styles.backButtonText}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Goal Progress</Text>
      </XStack>
      <CircularProgressGraph progress1={progress1} progress2={progress2} progress3={progress3} />
      <GoalBox
        goal={{ title: 'A in classes', color: '#EF6466' }}
        progress={progress1}
        onIncrement={() => setProgress1(progress1 + 1)}
        onDecrement={() => setProgress1(progress1 - 1)}
      />
      <GoalBox
        goal={{ title: 'Crochet Project', color: '#2F7B80' }}
        progress={progress2}
        onIncrement={() => setProgress2(progress2 + 1)}
        onDecrement={() => setProgress2(progress2 - 1)}
      />
      <GoalBox
        goal={{ title: 'SEEDS App', color: '#F5BB62' }}
        progress={progress3}
        onIncrement={() => setProgress3(progress3 + 1)}
        onDecrement={() => setProgress3(progress3 - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    top: 50
  },
  title: {
    fontFamily: 'Arial Rounded MT bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    left: 115,
    top: 5,
  },
  goalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: 340,
    height: 70,
    left: 5,
  },
  goalText: {
    fontFamily: 'Arial Rounded MT bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  goalInput: {
    fontFamily: 'Arial Rounded MT bold',
    fontSize: 18,
    width: 50,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  buttonContainer: {
    flexDirection: 'row',
    color: '#FFFFFF'
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 15,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
});

export default Goals;
