import AsyncStorage from "@react-native-community/async-storage"

export const setToken = async (token) => {
    try{
        await AsyncStorage.setItem("token", token)
        return true
    }catch(err){
        return false
    }

}

export const getToken = async () => {
    const currentToken = await AsyncStorage.getItem('token')
        .then(v => v)
        .catch(err => null)
    return currentToken
}

export const removeToken = async () => {
    await AsyncStorage.removeItem('token');
    return true
}