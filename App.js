import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([])

  function addGoal(enteredGoal) {
    setGoalList([
      ...goalList,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }

  function handleDeleteGoal(id) {
    setGoalList(goalList => {
      return goalList.filter((goal) => id !== goal.id);
    })
  }

  function handleGoal(e) {
    setEnteredGoal(e)
  }

  return (
    <View style={styles.container}>
      <GoalInput handleGoal={handleGoal} addGoal={addGoal} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          keyExtractor={(goal) => goal.id}
          renderItem={(goal) => {
            console.log(goal)
            return <GoalItem
              text={goal.item.text}
              id={goal.item.id}
              onDeleteGoal={handleDeleteGoal} />
          }
          } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 52,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },

});
