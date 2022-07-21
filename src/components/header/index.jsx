import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./index.css";

const Header = ({
    title,
    type,
    handleDeletion
}) => {
    const history = useHistory()
    const handleNavigation = (url) =>{
        history.push(url)
    }
    return (
        <div className={`page-header`}>
            <div className='page-header-title'>
                <p className='page-header-title-name'>{title}</p>
            </div>
            <div className='page-header-action-buttons'>
                {
                    type == 'list' && (
                        <>
                            <button className='page-header-action-button__add' onClick={()=>handleNavigation("/add-product")}>ADD</button>
                            <button className='page-header-action-button__mass-delete' id='delete-product-btn' onClick={handleDeletion}>MASS DELETE</button>
                        </>
                    )
                }
                {
                    type == 'add' && (
                        <>
                                <button onClick={()=>handleNavigation("/")} className='page-header-action-button__cancel'>Cancel</button>
                        </>
                    )
                }
            </div>
        </div>
    )
}
export default Header;