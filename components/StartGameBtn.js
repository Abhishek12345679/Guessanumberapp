import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, TouchableHighlight } from "react-native";

import BodyText from '../components/BodyText'
import Card from '../components/Card'
import Colors from '../constants/Colors'

import { Entypo } from '@expo/vector-icons'
import CircleShape from "./CircleShape";

const StartGameBtn = props => {
    return (
        <Card style={styles.startButtonContainer}>
            <View style={styles.numberAndStartButtonContainer}>
                <CircleShape style={styles.circle}>
                    <BodyText style={styles.selectedNumber}>{props.selectedNumber}</BodyText>
                </CircleShape>
                <TouchableHighlight
                    activeOpacity={0.26}
                    onPress={props.onPress}>
                    <Entypo name="controller-play" size={75} color={Colors.lakerpurple} />
                </TouchableHighlight>
            </View>
        </Card>);
};

const styles = StyleSheet.create({
    startButtonContainer: {
        width: '98%',
        height: 120,
        marginVertical: 10,
        borderRadius: 20
    },
    selectedNumber: {
        color: '#000',
        fontSize: 60,
        fontFamily: 'open-sans-bold'
    },
    numberAndStartButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%'
    },
    circle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
    }
});

export default StartGameBtn;
