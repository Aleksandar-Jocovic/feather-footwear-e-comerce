import React from 'react';
import { connect } from 'react-redux';
import {
	clearItemFromCart,
	addItem,
	removeItem
} from '../../redux/cart/cart.actions';

import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Quantity,
	RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, price, img, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<Name>{name}</Name>
			<ImageContainer>
				<img src={img} alt='item' />
			</ImageContainer>

			<Quantity>
				<div className='arrow' onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<div className='value'>{quantity}</div>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</Quantity>
			<span className='price'>{price}$</span>
			<RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
