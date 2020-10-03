import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ReviewItem } from '../../../components/ReviewItem';

export function ReviewTab() {
    const reviews = [
        {
            id: 1,
            user: {
                name: 'Prieyudha Akadita S',
                photo: 'https://avatars2.githubusercontent.com/u/26734262?s=460&u=e80ecdbe0f92f17d4ab5070b3b51c473aa17f6c2&v=4'
            },
            movie: {
                title: "Avengers: Endgame"
            },
            content: "Filmny bagus gan hehe udah saya lihat dengan mata kepala pak rt"
        },
        {
            id: 2,
            user: {
                name: 'Werren',
                photo: 'https://avatars2.githubusercontent.com/u/26734262?s=460&u=e80ecdbe0f92f17d4ab5070b3b51c473aa17f6c2&v=4'
            },
            movie: {
                title: "Avengers: Endgame"
            },
            content: "Nonton ini bareng keluarga besar, bikin terharu"
        },
        {
            id: 3,
            user: {
                name: 'Alvin Mantovani',
                photo: 'https://avatars2.githubusercontent.com/u/26734262?s=460&u=e80ecdbe0f92f17d4ab5070b3b51c473aa17f6c2&v=4'
            },
            movie: {
                title: "Avengers: Endgame"
            },
            content: "Gara gara film ini saya jadi ngantuk"
        },
        {
            id: 4,
            user: {
                name: 'Ni Made Rina S',
                photo: 'https://avatars2.githubusercontent.com/u/26734262?s=460&u=e80ecdbe0f92f17d4ab5070b3b51c473aa17f6c2&v=4'
            },
            movie: {
                title: "Avengers: Endgame"
            },
            content: "Lihat film ini kedua kalinya, masih mau nonton lagi!1!1!1"
        },
        {
            id: 5,
            user: {
                name: 'Tsaniya Nabila',
                photo: 'https://avatars2.githubusercontent.com/u/26734262?s=460&u=e80ecdbe0f92f17d4ab5070b3b51c473aa17f6c2&v=4'
            },
            movie: {
                title: "Avengers: Endgame"
            },
            content: "Mantap, jadi nostalgia waktu kecil"
        }
    ]
    return (
        <View>
            <FlatList
                style={styles.reviewTabContainer}
                keyExtractor={ item => item.id.toString()}
                data={reviews}
                renderItem={({item}) => {
                    return (<ReviewItem review={item}/>)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    reviewTabContainer: {
        marginTop: 64
        // paddingTop: 64,        
    }
})