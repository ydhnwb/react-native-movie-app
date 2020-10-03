import React, { useEffect } from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import { ProfileMenuItem } from './../../../components/ProfileMenuItem';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import * as SharedPref from './../../../utils/SharedPref';




export function ProfileTab({ navigation }) {
    const profileMenus = [
        {
            id: 1,
            title: "Your reviews",
            subtitle: "See all reviews you have posted",
            icon: "movie-open"
        },
        {
            id: 2,
            title: "Edit profile",
            subtitle: "Change your name, profile picture and more",
            icon: "account"
        },
        {
            id: 3,
            title: "Settings",
            subtitle: "Customize app settings",
            icon: "cog"
        },
        {
            id: 4,
            title: "Sign out",
            subtitle: "Logout from this app",
            icon: "account-cancel"
        }
    ]
    const auth = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
  
    const checkIsLoggedIn = async () => {
        const token = await SharedPref.getToken()
        dispatch({ type: "FETCH_TOKEN", payload: { token }})
    }
  
    useEffect(() => {
        checkIsLoggedIn()
    })
  
  

    const onMenuPress = (menuItem) => {
        console.log(menuItem)
    }
    
    const goToLoginPage = () => navigation.navigate("Login")
    const goToRegisterPage = () => navigation.navigate("Register")


    return (
        auth.token !== null ?
            <ScrollView>
                <View style={styles.headerContainer}>
                    <View style={styles.userRow}>
                        <Image
                            style={styles.userImage}
                            source={{ uri: "https://avatars2.githubusercontent.com/u/26734262?s=460&u=e80ecdbe0f92f17d4ab5070b3b51c473aa17f6c2&v=4" }}
                        />
                        <View style={styles.userNameRow}>
                            <Text style={styles.userNameText}>Prieyudha Akadita S</Text>
                        </View>
                        <View style={styles.userBioRow}>
                            <Text style={styles.userBioText}>akaditasustono@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <View>
                    {
                        profileMenus.map((menu, i) => {
                            return (
                                <ProfileMenuItem key={i} onPress={onMenuPress} i={i} item={menu} />
                            )
                        })
                    }
                </View>
            </ScrollView>

            :

            <View style={styles.containerNotLoggedIn}>
                <Image style={{
                    alignSelf: "center",
                    width: 120,
                    height: 120
                }} source={require('./../../../assets/ic_doodle_personalize.png')} />
                <Text style={{textAlign: "center", fontSize: 16}}>Sign in and then share your thought about movies</Text>
                <View style={{ marginTop: 16, flexDirection: "row", justifyContent: "center" }}>
                    <Button onPress={goToRegisterPage} title="Create account" type="outline"/>
                    <View style={{ marginStart: 16 }}>                    
                        <Button onPress={goToLoginPage} title="Sign in"/>
                    </View>

                </View>
            </View>


    );
}

const styles = StyleSheet.create({
    containerNotLoggedIn: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        padding: 16
    },
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
        padding: 16,
        paddingTop: 96
    },
    userBioRow: {
        marginLeft: 40,
        marginRight: 40,
    },
    userBioText: {
        color: 'gray',
        fontSize: 13.5,
        textAlign: 'center',
    },
    userImage: {
        borderRadius: 60,
        height: 72,
        marginBottom: 10,
        width: 72,
    },
    userNameRow: {
        marginBottom: 10,
    },
    userNameText: {
        color: '#5B5A5A',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userRow: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 12,
    },
})