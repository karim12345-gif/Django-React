import {GET_ITEMS, DECREASE_QUANTITY, INCREASE_QUANTITY} from '../types'

const initialState = {
    items:[],
    loading:true,
    isSelected: false
    
}

export default function ItemReducers(state = initialState, action){

    switch(action.type){

        case GET_ITEMS:
        return {
            ...state,
            items:action.payload,
            loading:false
        }

        case DECREASE_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id ?{...item, isSelected:false, price: item.price - 1} : item,
                    ),
            }

        case INCREASE_QUANTITY:
            return {
                ...state,
                items: state.item.map(item => item.id === action.id ? {...item, isSelected:false, price: item.price + 1} : item, )

            }
        default: return state;
    }

}