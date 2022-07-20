import * as actions from "../actions/productsAction";

export const initialState = {
  products: [],
  loading: false
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
      return { ...state, loading: false};
    
    default:
      return state;
  }
}
