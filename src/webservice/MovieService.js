import * as utils from './../utils/Utils';
import axios from 'axios';


export const genres = async () => {
    try{
        let status_code;
        const response = await axios.get(utils.TMDB_ENDPOINT+"genre/movie/list"+utils.TMDB_API_KEY, { headers: utils.DefaultHeader})
        .then((res) => {
            status_code = res.status
            return res.data
        }).catch(err => {
            status_code = err.response.status
            return err
        })
        return {response, status_code}
    }catch(err){
        console.log(`Exception in genre : ${err}`)
        return {response: null, status_code: null}
    }
}