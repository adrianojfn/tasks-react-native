import React, { Component } from "react";
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, TextInput, Platform } from 'react-native'

import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';

import commonStyles from "../commonStyles";

const initialState = { desc: '', date: new Date(), showDatePicker: false }

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }

        this.props.onSave && this.props.onSave(newTask)
        this.setState({ ...initialState })
    }

    // Function for date picker
    getDatePicker = () => {
        // Generate date picker for all platforms
        let datePicker = <DateTimePicker display="spinner" value={this.state.date} onChange={(_, date) => this.setState({ date, showDatePicker: false })} mode="date" />

        // Generate date string
        const dateString = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')

        // Conditional Rendering for Android
        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {
                        this.state.showDatePicker && datePicker
                    }
                </View>
            )
        }

        return datePicker
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType="slide">
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>New Task</Text>
                    <TextInput style={styles.input} placeholder="Enter the description..." value={this.state.desc} onChangeText={desc => this.setState({ desc })} />
                    {this.getDatePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: '#FFF',
    },
    header: {
        fontFamily: '',
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
    input: {
        fontFamily: '',
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today
    },
    date: {
        fontFamily: '',
        fontSize: 20,
        marginLeft: 15
    }
})