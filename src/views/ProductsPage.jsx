import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsAction';
import Footer from '../components/footer';
import Header from '../components/header';
import ProductCard from '../components/productCard';
import "../styles/productsPage.css"

const ProductsPage = ({
    dispatch,
    products
}) => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleSelection = (id) => {
        if (selectedProducts.includes(id)) {
            setSelectedProducts(selectedProducts.filter(productId => productId !== id))
        } else {
            setSelectedProducts([...selectedProducts, id])
        }
    }

    const checkSelected = (id) => {
        return selectedProducts.includes(id)
    }

    return (
        <>
            <div className='page'>
                <Header
                    title={"Products List"}
                    type={"list"}
                />
                <div className='products-list'>
                    {
                        products.map(product => (
                            <>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    selected={checkSelected(product.id)}
                                    handleSelection={handleSelection}
                                />
                            </>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
const mapStateToProps = (state) => ({
    products: state.productsReducer.products
});
export default connect(mapStateToProps)(ProductsPage);