import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteProducts, fetchProducts } from '../actions/productsAction';
import Footer from '../components/footer';
import Header from '../components/header';
import ProductCard from '../components/productCard';
import "../styles/productsPage.css"
import LoaderPage from './LoaderPage';

const ProductsPage = ({
    dispatch,
    products
}) => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        dispatch(fetchProducts())
    }, [])
    useEffect(()=>{
        setLoading(false)
    },[products])
    const handleSelection = (id) => {
        if (selectedProducts.includes(id)) {
            setSelectedProducts(selectedProducts.filter(productId => productId !== id))
        } else {
            setSelectedProducts([...selectedProducts, id])
        }
    }

    const handleDeletion = async()=>{
        console.log("deleting")
        await deleteProducts({
            ids: selectedProducts
        })
        dispatch(fetchProducts())
    }

    const checkSelected = (id) => {
        return selectedProducts.includes(id)
    }

    return loading ?(
        <LoaderPage />
    ) : (
        <>
            <div className='page'>
                <Header
                    title={"Products List"}
                    type={"list"}
                    handleDeletion={handleDeletion}
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