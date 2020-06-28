import React from 'react';
import { connect } from 'react-redux';


import { removeItem, addItem , removeItemUnit } from '../../redux/cart/cart.actions'

import './checkout-item.style.scss'

function CheckoutItem({ cartItem, removeItem, addItem, removeItemUnit }) {

    const { name, imageUrl, price, quantity} = cartItem;

    return (
        <div className='checkout-item '>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemUnit(cartItem)}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                 <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item =>  dispatch(addItem(item)),
    removeItemUnit: item => dispatch(removeItemUnit(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);
