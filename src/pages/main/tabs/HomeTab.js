import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Dimensions, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabPageContent from '../../top_tab/TopTabPageContent';
import * as MovieService from './../../../webservice/MovieService';
import { useSelector, useDispatch } from 'react-redux';
const TopTab = createMaterialTopTabNavigator();

export function HomeTab() {
    const genres = useSelector(state => state.movieReducer.genres)

    const dispatch = useDispatch()


    const fetchGenres = async () => {
      const resp = await MovieService.genres()
      if (resp.status_code === 200) {
        const genres = resp.response.genres
        dispatch({
            type: "FETCH_GENRES",
            payload: { genres }
        })
      }
  }
  
  
  useEffect(() => {
      fetchGenres()
  }, [])
    return (
        genres !== null ?

            <TopTab.Navigator lazy={true} style={styles.root} lazy={true} tabBarOptions={{ scrollEnabled: true }}>
                <TopTab.Screen key="0" name="Categories" component={TopTabPageContent} />
                {
                    genres.map(genre => {
                        return (
                            <TopTab.Screen key={genre.id.toString()} name={genre.name} component={TopTabPageContent} />
                        )
                    })
                }
            </TopTab.Navigator>

            :

            <View style={{ backgroundColor: "red", width: Dimensions.get('window').width, flex: 1, flexDirection: "column", alignSelf: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="blue" />
            </View>

            
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 64
    }
})