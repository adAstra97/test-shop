import { StoreAction, StoreActionType } from './../types/types';

const initialState = {
   products: [],
};

export const productReducer = (state = initialState, {type, payload}: StoreAction) => {
   switch (type) {
      case StoreActionType.SET_PRODUCTS:
         return {...state, products: payload};
      default:
         return state;
   }
}