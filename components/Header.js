import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Colors from '../constants/Colors'
import TitleText from '../components/TitleText'


const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: Colors.lakerblack,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.lakerblack,
        shadowOffset: {
            width: 25,
            height: 7
        },
        shadowOpacity: 0.6,
        shadowRadius: 50,
    },
    headerTitle: {
        color: '#fff',
        textAlign: 'center'
    }
});

export default Header;
