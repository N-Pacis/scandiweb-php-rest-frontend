import React, { useEffect, useState } from 'react';
import "./index.css";

const ProductCard = ({
    product,
    selected,
    handleSelection
}) => {
    const [productType,setProductType] = useState('');
    
    useEffect(()=>{
        switch(product?.Product_Type){
            case 'DVD':
                setProductType('DVD');
                break;
            case 'Book':
                setProductType('Book');
                break;
            case 'Furniture':
                setProductType('Furniture');
                break;
            default:
                setProductType('')
        }

    },[])

    return (
        <div className={`product-card ${selected && 'product-card-selected'}`}>
            <input type="checkbox" className="delete-checkbox" onChange={()=>handleSelection(product?.id)}/>
            <div className='product-card-description'>
                <p className='product-sku'>{product?.SKU}</p>
                <p className='product-name'>{product?.Name}</p>
                <p className='product-price'>{product?.Price} $</p>
                {
                    
                    productType == 'DVD' && (
                        <div className='product-specific'>
                            <span className='product-specific-name'>Size: </span>
                            <p className='product-specific-value'>{product?.Size} MB</p>
                        </div>
                    )
                }
                {            
                    productType == 'Book' && (
                        <div className='product-specific'>
                            <span className='product-specific-name'>Weight: </span>
                            <p className='product-specific-value'>{product?.Weight} KG</p>
                        </div>
                    )
                }
                {
                    productType == 'Furniture' && (
                        <div className='product-specific'>
                            <span className='product-specific-name'>Dimension: </span>
                            <p className='product-specific-value'>{product?.Length}x{product?.Width}x{product?.Height} </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default ProductCard;