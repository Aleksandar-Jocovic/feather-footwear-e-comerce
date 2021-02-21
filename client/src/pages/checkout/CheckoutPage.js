import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

import {
	selectCartItems,
	selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlock,
	TotalContainer,
	TestWarningContainer
} from './checkout-page.styles';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<HeaderBlock>
				<span>Prooduct</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Quantity</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Price</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Remove</span>
			</HeaderBlock>
		</CheckoutHeaderContainer>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<TotalContainer>
			<span>TOTAL: ${total}</span>
		</TotalContainer>
		<StripeButton price={total} />
		<TestWarningContainer>
			**Please use the following test credit cqard for payments**
			<br />
			4242 4242 4242 4242 - Exp: 04/24 - CVV: 242
		</TestWarningContainer>
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
