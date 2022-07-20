import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsAction';

const ProductsList = ({
    dispatch,
    products
}) => {
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    return (
        <h1>Products List</h1>
    )
}
const mapStateToProps = (state) => ({
    products: state.productsReducer.products
});
export default connect(mapStateToProps)(ProductsList);