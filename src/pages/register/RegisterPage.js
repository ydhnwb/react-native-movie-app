import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import * as AuthService from './../../webservice/AuthService';

export const RegisterPage = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordVisble, setPasswordVisibility] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const doRegister = async () => {
        setIsLoading(true)
        const response = await AuthService.register(name, email, password)
        setIsLoading(false)
        if (response.status_code !== 201) {
            const token = response.data.token
            dispatch({ type: "FETCH_TOKEN", payload: { token } })
            navigation.popToTop()
        } else {
            showInfoAlert("Failed", "Failed registering your account.")
        }
    }

    const showInfoAlert = (title, message) => {
        Alert.alert(title, message, [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
            { cancelable: true }
        );
    }

    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{
                margin: 8
            }}>
                <Ionicons name="chevron-back" size={32} />
            </TouchableOpacity>
            <Text style={styles.titlePage}>Create account</Text>
            <Text style={{ marginStart: 16, marginEnd: 16, marginBottom: 16 }}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet</Text>
            <View style={styles.form}>
                <Input
                    onChangeText={text => setName(text)}
                    placeholder='Full name'
                    leftIcon={
                        <MaterialCommunityIcons
                            name='account'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    onChangeText={text => setEmail(text)}
                    placeholder='Email'
                    leftIcon={
                        <MaterialCommunityIcons
                            name='email'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={isPasswordVisble}
                    placeholder='Password'
                    leftIcon={
                        <MaterialCommunityIcons
                            name='shield-lock'
                            size={24}
                            color='black'
                        />
                    }
                    rightIcon={
                        <MaterialCommunityIcons
                            onPress={setPasswordVisibility(!isPasswordVisble)}
                            name='eye-off'
                            size={24}
                            color='black'
                        />
                    }
                />
                <TouchableOpacity
                    disabled={isLoading}
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => doRegister()}>
                    {
                        isLoading ?
                            <ActivityIndicator color="#ffffff" size="small" />
                            :
                            <Text style={styles.TextStyle}> Register </Text>
                    }

                </TouchableOpacity>

            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    titlePage: {
        fontSize: 24,
        marginStart: 16
    },
    form: {
        marginStart: 10,
        marginEnd: 10,
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    SubmitButtonStyle: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#00BCD4',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#fff'
    },
    forgotPasswordText: {
        alignSelf: "flex-end",
        marginBottom: 16

    },
    altSignInButton: {
        borderRadius: 400,
        elevation: 1,
        margin: 4,
        backgroundColor: "white",
        padding: 8
    }

})