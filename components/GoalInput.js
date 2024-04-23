import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleGoal}
                    placeholder='Your course goal'
                    value={enteredGoal}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={handleAddGoal} color='#b180f0' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        backgroundColor:"#311b6b",
    },
    image: {
        height: 240,
        width: 240,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        color: '#120438',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding: 12,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginHorizontal: 8,
        width: '30%',
    },
})
