import React from "react";
import { connect } from "react-redux";

import { toogleCartDropdown } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import "./cart-icon.styles.css";

const CartIcon = ({ toogleCartDropdown }) => (
	<div className='cart-icon' onClick={toogleCartDropdown}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>4</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toogleCartDropdown: () => dispatch(toogleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
