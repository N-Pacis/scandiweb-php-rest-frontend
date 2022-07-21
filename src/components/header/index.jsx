import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const Header = ({
    title,
    type
}) => {

    return (
        <div className={`page-header`}>
            <div className='page-header-title'>
                <p className='page-header-title-name'>{title}</p>
            </div>
            <div className='page-header-action-buttons'>
                {
                    type == 'list' && (
                        <>
                            <Link to={'/add-product'} className='page-header-action-button__add'>Add</Link>
                            <button className='page-header-action-button__mass-delete' id='delete-product-btn'>Mass Delete</button>
                        </>
                    )
                }
                {
                    type == 'add' && (
                        <>
                                <Link to={'/'} className='page-header-action-button__cancel'>Cancel</Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}
export default Header;