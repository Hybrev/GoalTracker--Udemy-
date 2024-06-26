import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={props.onDeleteGoal.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }
})