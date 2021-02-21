import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
	CollectionItemContainer,
	BackgroundImage,
	AddButton,
	NameContainer,
	PriceContainer,
	PriceAndShopButton
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, img } = item;

	return (
		<CollectionItemContainer>
			<BackgroundImage
				style={{
					backgroundImage: `url(${img})`
				}}
			/>
			<NameContainer>{name}</NameContainer>
			<PriceAndShopButton>
				<AddButton onClick={() => addItem(item)}>shop now</AddButton>
				<PriceContainer>${price},00</PriceContainer>
			</PriceAndShopButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
