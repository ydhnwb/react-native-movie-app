import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';

export const ReviewItem = ({ review, onPress }) => {
    return (
        <View style={{ flexDirection: "column" }}>
            <View style={styles.reviewContainer}>
                <Avatar rounded source={{ uri: review.user.photo }} />
                <View style={styles.reviewBody}>
                    <Text style={styles.textName}>{review.user.name}</Text>
                    <Text>on {review.movie.title}</Text>
                    <Text>{review.content}</Text>
                    <View style={styles.actions}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                            <TouchableOpacity onPress={() => console.log("yosh")} >
                                <Ionicons name="ios-star" size={14} color="black" />
                            </TouchableOpacity>
                            <Text style={{ marginStart: 4 }}>4.2</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                            <TouchableOpacity onPress={() => console.log("yosh")} >
                                <Ionicons name="ios-star" size={14} color="black" />
                            </TouchableOpacity>
                            <Text style={{ marginStart: 4 }}>132</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Divider/>
        </View>

    )
}

const styles = StyleSheet.create({
    reviewContainer: {
        padding: 16,
        flexDirection: "row"
    },
    reviewBody: {
        flex: 1,
        marginLeft: 10,
        flexDirection: "column"
    },
    textName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    actions: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around"
    }
})