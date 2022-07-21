import React, { useState } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/footer';
import Header from '../components/header';
import "../styles/addProduct.css"
import { useForm } from "react-hook-form";
import Select from "react-select";
import { postProduct } from '../actions/productsAction';
import { useHistory } from 'react-router-dom';

const AddProduct = ({
}) => {
    const [productType, setProductType] = useState('')
    const [localSending, setLocalSending] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLocalSending(true)
        data.productType = productType
        let response = await postProduct(data)
        console.log(response)
        if (response.success) {
            history.push("/")
            setError("")
        }
        else {
            setError(response?.response?.data?.error || "Error occured")
        }
        setLocalSending(false)
    }

    const selectHandler = (payload) => {
        var value = payload.value;
        setProductType(value);
    };

    const productTypes = [
        {
            value: "DVD",
            label: "DVD/DISC"
        },
        {
            value: "Book",
            label: "Book"
        },
        {
            value: "Furniture",
            label: "Furniture"
        }
    ]

    return (
        <>
            <div className='page'>
                <Header
                    title={"Product Add"}
                    type={"add"}
                />
                <form className='add-product-form' id="product_form" onSubmit={handleSubmit(onSubmit)}>
                    {
                        error.length > 0 && (
                            <div className='top-error-message'>
                                {error}
                            </div>
                        )
                    }
                    <div className='form-group'>
                        <div className='form-control-group'>
                            <label htmlFor='sku'>SKU:</label>
                            <input
                                name="SKU"
                                type="text"
                                placeholder="SKU"
                                id="sku"
                                className={errors.sku ? "error-input" : ""}
                                autoComplete='off'
                                {...register("sku", { required: true })}
                            />
                        </div>
                        {
                            errors.sku && (
                                <p className='error'>SKU is required</p>
                            )
                        }
                    </div>
                    <div className='form-group'>
                        <div className='form-control-group'>
                            <label htmlFor='name'>Name:</label>
                            <input
                                name="Name"
                                type="text"
                                placeholder="Name"
                                id="name"
                                className={errors.name ? "error-input" : ""}
                                autoComplete='off'
                                {...register("name", { required: true })}
                            />
                        </div>
                        {
                            errors.name && (
                                <p className='error'>Name is required</p>
                            )
                        }
                    </div>
                    <div className='form-group'>
                        <div className='form-control-group'>
                            <label htmlFor='sku'>Price($):</label>
                            <input
                                name="Price"
                                type="number"
                                placeholder="Price"
                                id="price"
                                className={errors.price ? "error-input" : ""}
                                autoComplete='off'
                                {...register("price", { required: true })}
                            />
                        </div>
                        {
                            errors.price && (
                                <p className='error'>Price is required</p>
                            )
                        }
                    </div>
                    <div className='form-group'>
                        <div className='form-control-group'>
                            <p>Type Switcher:</p>
                            <Select
                                options={productTypes}
                                name="productType"
                                onChange={(payload) =>
                                    selectHandler({ ...payload })
                                }
                                id="productType"
                                className={`select-product-type ${errors.productType ? "error-input" : ""}`}
                                placeholder={
                                    <div className="select-placeholder-text">
                                        Type Switcher
                                    </div>
                                }
                            />
                        </div>
                        {errors.productType && (
                            <p className="error-input">Product Type is required</p>
                        )}
                    </div>
                    {
                        productType == 'DVD' && (
                            <div className='form-group'>
                                <p className='product-description'>Please, provide size</p>
                                <div className='form-control-group'>
                                    <label htmlFor='size'>Size(MB):</label>
                                    <input
                                        name="size"
                                        type="number"
                                        placeholder="Size"
                                        id="size"
                                        className={errors.size ? "error-input" : ""}
                                        autoComplete='off'
                                        {...register("size", { required: true })}
                                    />
                                </div>
                                {
                                    errors.size && (
                                        <p className='error'>Size is required</p>
                                    )
                                }
                            </div>
                        )
                    }
                    {
                        productType == 'Book' && (
                            <div className='form-group'>
                                <p className='product-description'>Please, provide weight</p>
                                <div className='form-control-group'>
                                    <label htmlFor='weight'>Weight(KG):</label>
                                    <input
                                        name="weight"
                                        type="number"
                                        placeholder="Weight"
                                        id="weight"
                                        className={errors.weight ? "error-input" : ""}
                                        autoComplete='off'
                                        {...register("weight", { required: true })}
                                    />
                                </div>
                                {
                                    errors.weight && (
                                        <p className='error'>Weight is required</p>
                                    )
                                }
                            </div>
                        )
                    }
                    {
                        productType == 'Furniture' && (
                            <>
                                <p className='product-description'>Please, provide dimensions</p>
                                <div className='form-group'>
                                    <div className='form-control-group'>    
                                        <label htmlFor='height'>Height(CM):</label>
                                        <input
                                            name="height"
                                            type="number"
                                            placeholder="Height"
                                            id="height"
                                            className={errors.height ? "error-input" : ""}
                                            autoComplete='off'
                                            {...register("height", { required: true })}
                                        />
                                    </div>
                                    {
                                        errors.height && (
                                            <p className='error'>Height is required</p>
                                        )
                                    }
                                </div>
                                <div className='form-group'>
                                    <div className='form-control-group'>
                                        <label htmlFor='width'>Width(CM):</label>
                                        <input
                                            name="width"
                                            type="number"
                                            placeholder="Width"
                                            id="width"
                                            className={errors.width ? "error-input" : ""}
                                            autoComplete='off'
                                            {...register("width", { required: true })}
                                        />
                                    </div>
                                    {
                                        errors.width && (
                                            <p className='error'>Width is required</p>
                                        )
                                    }
                                </div>
                                <div className='form-group'>
                                    <div className='form-control-group'>
                                        <label htmlFor='length'>Length(CM):</label>
                                        <input
                                            name="length"
                                            type="number"
                                            placeholder="Length"
                                            id="length"
                                            className={errors.length ? "error-input" : ""}
                                            autoComplete='off'
                                            {...register("length", { required: true })}
                                        />
                                    </div>
                                    {
                                        errors.length && (
                                            <p className='error'>Length is required</p>
                                        )
                                    }
                                </div>
                            </>
                        )
                    }
                    <button
                        className='save-product-btn'
                        disabled={localSending}
                    >
                        {localSending ? <span>Wait ...</span> : <span>Save</span>}

                    </button>
                </form>
            </div >
            <Footer />
        </>
    )
}
const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps)(AddProduct);