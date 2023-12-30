// This component represents the screen that contains the list of tasks

import React, { Component } from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'

// Import default styles
import commonStyles from "../commonStyles";

// Import background image
import todayImage from '../../assets/imgs/today.jpg'

// Import the current day and time information
import moment from "moment";
import 'moment/locale/pt-br'

import Task from "../components/Task";

export default class TaskList extends Component {

    // State to save tasks
    state = {
        tasks: [{
            id: Math.random(),
            desc: 'Buy Air Force 1',
            estimateAt: new Date(),
            doneAt: new Date(),
        }, {
            id: Math.random(),
            desc: 'Read Stranger Things book',
            estimateAt: new Date(),
            doneAt: null
        }]
    }

    // Function that switches the completion status of tasks
    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks })
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background} >
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Today</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.tasks} keyExtractor={item => `${item.id}`} renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} /> } />
                </View> 
            </View>
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