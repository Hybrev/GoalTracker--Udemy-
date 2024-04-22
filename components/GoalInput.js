import { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

export default function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('')

    function handleGoal(e) {
        setEnteredGoal(e)
    }

    function handleAddGoal() {
        props.addGoal(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={handleGoal}
                placeholder='Your course goal'
                value={enteredGoal}
            />
            <Button title='Add Goal' onPress={handleAddGoal} />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        marginRight: 8,
        padding: 8,
    },
})
