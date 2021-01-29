import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

import {
	selectCartItems,
	selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.css';

const CheckoutPage = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Prooduct</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
		<StripeButton price={total} />
		<div className='test-warning'>
			**Please use the following test credit cqard for payments**
			<br />
			4242 4242 4242 4242 - Exp: 04/24 - CVV: 242
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);