import React, { useEffect, useState } from 'react';
import "./index.css";

const ProductCard = ({
    product,
    selected,
    handleSelection
}) => {
    const [productType,setProductType] = useState('');
    
    useEffect(()=>{
        switch(product?.product_type){
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
                <p className='product-sku'>{product?.sku}</p>
                <p className='product-name'>{product?.name}</p>
                <p className='product-price'>{product?.price} $</p>
                {
                    
                    productType == 'DVD' && (
                        <div className='product-specific'>
                            <span className='product-specific-name'>Size: </span>
                            <p className='product-specific-value'>{product?.size} MB</p>
                        </div>
                    )
                }
                {            
                    productType == 'Book' && (
                        <div className='product-specific'>
                            <span className='product-specific-name'>Weight: </span>
                            <p className='product-specific-value'>{product?.weight} KG</p>
                        </div>
                    )
                }
                {
                    productType == 'Furniture' && (
                        <div className='product-specific'>
                            <span className='product-specific-name'>Dimension: </span>
                            <p className='product-specific-value'>{product?.length}x{product?.width}x{product?.height} </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default ProductCard;