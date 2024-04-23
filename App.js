import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [goalList, setGoalList] = useState([])
  const [isAdding, setIsAdding] = useState(false)

  function openAddModal() {
    setIsAdding(!isAdding)
  }

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
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button title='Add New Goal' onPress={openAddModal} color='#a065ec' />
        {isAdding && <GoalInput handleGoal={handleGoal} addGoal={addGoal} onCancel={openAddModal} visible={isAdding} />}

        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            keyExtractor={(goal) => goal.id}
            renderItem={
              (goal) => <GoalItem
                text={goal.item.text}
                id={goal.item.id}
                onDeleteGoal={handleDeleteGoal}
              />
            } />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    paddingHorizontal: 16,

  },
  goalsContainer: {
    flex: 5,
  },

});
