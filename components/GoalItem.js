import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
        padding: 8,
    },
    goalText: {
        color: 'white'
    }
})