import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 85,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 20,
    },
    boxTwo: {
        flex: 4,
        backgroundColor: 'gold',
        padding: 30.
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 40,
    },
    boxFour: {
        flex: 2,
        backgroundColor: 'skyblue',
        padding: 10,
    }

});