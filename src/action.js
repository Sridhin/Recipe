import { API_REQUEST, API_SUCCESS, API_FAIL} from "./constants";
import axios from 'axios';









export const listFood= (query, APP_ID, APP_KEY) => async(dispatch) => {
    try{
        dispatch({type: API_REQUEST})
        const {data} = await axios.get( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

        dispatch({type:API_SUCCESS, payload: data,  })


    }catch(error){
        dispatch({type: API_FAIL})

    }
}
