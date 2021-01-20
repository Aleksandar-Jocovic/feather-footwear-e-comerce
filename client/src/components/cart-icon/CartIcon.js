import React from 'react';
import { connect } from 'react-redux';

import { toogleCartDropdown } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.css';

const CartIcon = ({ toogleCartDropdown, itemCount }) => (
	<div className='cart-icon' onClick={toogleCartDropdown}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toogleCartDropdown: () => dispatch(toogleCartDropdown())
});

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
