import React from 'react';

import './checkout-item.styles.css';
const CheckoutItem = ({ cartItem: { name, price, img, quantity } }) => {
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={img} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>{quantity}</span>
			<span className='price'>{price}</span>
			<span className='remove-button'>&#10005;</span>
		</div>
	);
};

export default CheckoutItem;
