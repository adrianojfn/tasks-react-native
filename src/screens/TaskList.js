// This component represents the screen that contains the list of tasks

import React, { Component } from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet } from 'react-native'

// Import default styles
import commonStyles from "../commonStyles";

// Import background image
import todayImage from '../../assets/imgs/today.jpg'

// Import the current day and time information
import moment from "moment";
import 'moment/locale/pt-br'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background} >
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>Task #01</Text>
                    <Text>Task #02</Text>
                    <Text>Task #03</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: '',
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: '',
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    }
})