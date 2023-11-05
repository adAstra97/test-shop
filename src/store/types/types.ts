export enum StoreActionType {
   SET_PRODUCTS = "SET_PRODUCTS",
   SELECTED_PRODUCT = "SELECTED_PRODUCT",
   REMOVE_PRODUCT = "REMOVE_PRODUCT",
};

export interface ISetProductsAction {
   type: StoreActionType.SET_PRODUCTS,
   payload: [];
};

export interface ISelectedProductAction {
   type: StoreActionType.SELECTED_PRODUCT,
   payload: [];
};

export interface IRemoveProductAction {
   type: StoreActionType.REMOVE_PRODUCT,
   payload: [];
};

export type StoreAction = ISetProductsAction | ISelectedProductAction | IRemoveProductAction;