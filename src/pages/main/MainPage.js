import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeTab } from './tabs/HomeTab';
import { ProfileTab } from './tabs/ProfileTab';
import { ReviewTab } from './tabs/ReviewTab';

const Tab = createBottomTabNavigator();

export default function MainPage(){

  return(
    <Tab.Navigator lazy={true} initialRouteName="Movie" 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Movie') {
                iconName = focused ? 'ios-film' : 'ios-film-outline';
            }else if(route.name === 'Review'){
                iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
            }else{
                iconName = focused ? 'people-circle' : 'people-circle';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }} >
      <Tab.Screen name="Movie" component={HomeTab}/>
      <Tab.Screen name="Review" component={ReviewTab}/>
      <Tab.Screen name="Profile" component={ProfileTab}/>
    </Tab.Navigator>
  )
}