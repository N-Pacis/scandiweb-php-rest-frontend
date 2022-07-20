import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

const ENDPOINT = import.meta.env.VITE_REACT_APP_BASE_API_URL;

export const getProducts = () => ({
    type: GET_PRODUCTS,
});

export const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
});

export const getProductsFailure = () => ({
    type: GET_PRODUCTS_FAILURE,
});

export function fetchProducts() {
    return async (dispatch, getState) => {
        dispatch(getProducts());
        try {
            const url = `/products`;

            let productsFromBackend = await axios.get(`${ENDPOINT}${url}`);
            dispatch(getProductsSuccess(productsFromBackend?.data));
        } catch (error) {
            dispatch(getProductsFailure());
        }
    };
}
