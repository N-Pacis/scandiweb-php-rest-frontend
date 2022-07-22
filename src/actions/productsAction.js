import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const SEND_PRODUCT = "SEND_PRODUCT";
export const SEND_PRODUCT_SUCCESS = "SEND_PRODUCT_SUCCESS";
export const SEND_PRODUCT_FAILURE = "SEND_PRODUCT_FAILURE";


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

export const sendProduct = () => ({
    type: SEND_PRODUCT,
});

export const sendProductSuccess = () => ({
    type: SEND_PRODUCT_SUCCESS,
});

export const sendProductFailure = () => ({
    type: SEND_PRODUCT_FAILURE,
});


export function fetchProducts() {
    return async (dispatch, getState) => {
        dispatch(getProducts());
        try {
            const url = `/`;

            let productsFromBackend = await axios.get(`${ENDPOINT}${url}`);
            dispatch(getProductsSuccess(productsFromBackend?.data));
        } catch (error) {
            dispatch(getProductsFailure());
        }
    };
}


export async function postProduct(dataToPost) {
    try {
        const url = `/`;
        let response = await axios.post(`${ENDPOINT}${url}`, dataToPost);
        return { success: true, data: response.data };
    } catch (err) {
        return { success: false,err };
    }
}

export async function deleteProducts(dataToDelete) {
    try {
        const url = `/`;
        let response = await axios.put(`${ENDPOINT}${url}`, dataToDelete);
        return { success: true, data: response.data };
    } catch (err) {
        return { sucess: false, err };
    }
}