import { GET_ITEMS, ITEMS_ERROR, INCREASE_QUANTITY, DECREASE_QUANTITY  } from "../types";
import axios from 'axios'



export const getItems = () => async (dispatch) => {


    try{
        const res = await axios.get(`http://localhost:8000/api/bills/`)
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
        
    }


    catch(e){
        dispatch({
            type: ITEMS_ERROR,
            payload: console.log(e),
        })
       
    }

}


export const addQuantity = id => {
    return {
        type: INCREASE_QUANTITY,
        id,
    }
}

export const subtractQuantity = id => {
    return {
        type: DECREASE_QUANTITY,
        id,
    }
}




