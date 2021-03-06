import SHOP_DATA from './shop.data'
import ShopActionTypes from "./shop.types";


const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTION:
            return {
                ...state,
                collections: action.payLoad
            }

        default:
            return state;
    }
}

export default shopReducer;