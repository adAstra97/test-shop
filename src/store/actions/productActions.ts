import { StoreActionType } from "../types/types";

export const setProducts = (products : []) => {
   return {
      type: StoreActionType.SET_PRODUCTS,
      payload: products,
   };
};

export const selectedProduct = (product : {}) => {
   return {
      type: StoreActionType.SELECTED_PRODUCT,
      payload: product,
   }
};