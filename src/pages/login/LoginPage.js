import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import * as AuthService from './../../webservice/AuthService'
import * as SharedPref from './../../utils/SharedPref';

export default function LoginPage({ navigation }) {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goToRegisterPage = () => navigation.navigate("Register")


    const doLogin = async () => {
        setIsLoading(true)
        const response = await AuthService.login(email, password)
        setIsLoading(false)
        if (response.status_code === 200) {
            const token = response.response.data.token
            await SharedPref.setToken(token)
            dispatch({
                type: "FETCH_TOKEN",
                payload: { token }
            })
            navigation.goBack()
        } else {
            showInfoAlert("Failed", "Login failed")
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
            <Text style={styles.titlePage}>Sign in</Text>
            <Text style={{ marginStart: 16, marginEnd: 16, marginBottom: 16 }}>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet</Text>
            <View style={styles.form}>
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
                    secureTextEntry={true}
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
                            name='eye-off'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                <TouchableOpacity
                    disabled={isLoading}
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => doLogin()}>
                    {
                        isLoading ?
                            <ActivityIndicator color="#ffffff" size="small" />
                            :
                            <Text style={styles.TextStyle}>Login</Text>
                    }

                </TouchableOpacity>

                <Text style={{ textAlign: 'center', marginTop: 16 }}>
                    Don't have an account? <Text onPress={goToRegisterPage} style={{ fontWeight: 'bold' }}>Create now!</Text>
                </Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 16, marginVertical: 16 }}>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5 }}>OR</Text>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center' }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                    <TouchableOpacity style={styles.altSignInButton}>
                        <MaterialCommunityIcons
                            name='google'
                            size={24}
                            color='grey'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.altSignInButton}>
                        <MaterialCommunityIcons
                            name='facebook'
                            size={24}
                            color='grey'
                        />
                    </TouchableOpacity>
                </View>
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