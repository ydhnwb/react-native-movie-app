import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './../pages/main/MainPage';
import LoginPage from '../pages/login/LoginPage';
import { SearchBox } from '../components/SearchBox';
import { RegisterPage } from '../pages/register/RegisterPage';
import { useDispatch } from 'react-redux';
import * as  MovieService from './../webservice/MovieService'


const RootStack = createStackNavigator();

export default function RootApp() {


    return (
        <RootStack.Navigator initialRouteName="Main">
            <RootStack.Screen name="Main" component={MainPage} options={{
                headerTransparent: true,
                header: props => <SearchBox {...props}/>
            }}/>
            <RootStack.Screen name="Login" component={LoginPage} options={{
                headerShown: false
            }}/>
            <RootStack.Screen name="Register" component={RegisterPage} options={{
                headerShown: false
            }}/>
        </RootStack.Navigator>
    )
}