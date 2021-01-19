import React from "react";

import CustomButton from "../custom-button/CustomButton";

import "./cart-dropdown.styles.css";

const CartDropdown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<CustomButton>checkout</CustomButton>
		</div>
	);
};

export default CartDropdown;
