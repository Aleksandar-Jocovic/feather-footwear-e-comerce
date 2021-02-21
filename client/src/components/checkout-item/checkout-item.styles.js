import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
	position: relative;
	.price {
		width: 25%;
		text-align: center;
		padding-left: 20px;
	}
`;

export const ImageContainer = styled.div`
	width: 25%;
	img {
		width: 100%;
		height: 100%;
	}
`;
export const Name = styled.span`
	color: #4d434f;
	font-size: 18px;
	text-align: center;
	position: absolute;
	bottom: 10px;
	right: 0;
`;

export const Quantity = styled.span`
	width: 25%;
	text-align: center;
	display: flex;
	justify-content: center;
	.arrow {
		cursor: pointer;
		font-size: 23px;
	}
	.value {
		margin: 0 10px;
		align-self: center;
	}
`;

export const RemoveButton = styled.span`
	width: 25%;
	text-align: center;
	cursor: pointer;
	@media screen and (max-width: 800px) {
		padding-left: unset;
	}
`;
