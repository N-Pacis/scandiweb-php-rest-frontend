import * as actions from "../actions/productsAction";

export const initialState = {
  products: [],
  loading: false,
  sending: false,
  hasErrors: false,
};
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return { ...state, loading: true };
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false
      };
    case actions.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false };
    case actions.SEND_PRODUCT:
      return { ...state, sending: true };
    case actions.SEND_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: false,
        sending: false,
      };
    case actions.SEND_PRODUCT_FAILURE:
      return { ...state, loading: false, hasErrors: true, sending: false };
    default:
      return state;
  }
}
