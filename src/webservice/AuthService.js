import * as utils from './../utils/Utils';
import axios from 'axios';

export const login = async (email, password) => {
    try{
        let status_code;
        const payload = {
            email: email,
            password: password
        }
        const response = await axios.post(utils.ENDPOINT+"user/login", payload, { headers: utils.DefaultHeader})
        .then((res) => {
            status_code = res.status
            return res.data
        }).catch(err => {
            status_code = err.response.status
            console.log("Erorr: "+err)
            return err
        })
        return {response, status_code}
    }catch(err){
        console.log(`Exception in login : ${err}`)
        return {response: null, status_code: null}
    }
}

export const register = async (name, email, password) => {
    try{
        let status_code;
        const response = await axios.post("https://be-kickin.herokuapp.com/api/v1/user/register", payload, { headers: DefaultHeader })
            .then((res) => {
                status_code = res.status;
                return res.data;
            })
            .catch(err => {
                status_code = err.response.status;
                console.log("Erorr: "+err)
                return err
            })
            return {response, status_code}
    }catch(err){
        console.log(`Exception in login : ${err}`)
        return {response: null, status_code: null}
    }
}