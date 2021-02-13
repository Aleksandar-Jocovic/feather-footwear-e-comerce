import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.css';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, img } = item;

	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${img})`
				}}
			/>
			<div className='name'>{name}</div>
			<div className='price-and-shop-button'>
				<button onClick={() => addItem(item)}>shop now</button>
				<span className='price'>${price},00</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
