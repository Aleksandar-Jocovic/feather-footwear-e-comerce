import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51ILuEDL5SmYkVppXBr6jdHLSsnwRy0ULYqbqIGR5WhnpSUseL0IGUIsopJPS7A7aMwlYwYF2PZULZvKSJOhQVUGY00SW0vmgGj';

	const onToken = token => {
		console.log(priceForStripe);
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then(response => {
				alert('Payment successful');
			})
			.catch(error => {
				console.log('payment error', error);
				alert(
					'There was an issue with your payment. Please make sure you are using provided credit card.'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='FDR Footwear'
			billingAddress
			shippingAddress
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
