import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, Alert } from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Success!', 'Create account')
        } else {
            Alert.alert('Success!', 'Log in')

        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {
                            this.state.stageNew ? 'Create your account' : 'Enter your data'
                        }
                    </Text>
                    {
                        this.state.stageNew &&
                        <TextInput placeholder='Name' value={this.state.name} style={styles.input} onChangeText={name => this.setState({ name })} />
                    }
                    <TextInput placeholder='Email' value={this.state.email} style={styles.input} onChangeText={email => this.setState({ email })} />
                    <TextInput placeholder='Password' value={this.state.password} style={styles.input} onChangeText={password => this.setState({ password })} secureTextEntry={true} />
                    {
                        this.state.stageNew &&
                        <TextInput placeholder='Confirm Password' value={this.state.confirmPassword} style={styles.input} onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    }
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {
                                    this.state.stageNew ? 'Register' : 'Login'
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>
                        {
                            this.state.stageNew ? 'Already have an account?' : 'Dont have an account?'
                        }
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: '',
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: '',
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        padding: Platform.OS == 'ios' ? 15 : 10

    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: '',
        color: '#FFF',
        fontSize: 20
    }
})