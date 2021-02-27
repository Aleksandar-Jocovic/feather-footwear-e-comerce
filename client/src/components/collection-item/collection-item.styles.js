import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
	width: 250px;
	max-width: 250px;

	height: 320px;
	overflow: hidden;
	position: relative;

	@media screen and (max-width: 800px) {
		width: 45vw;
	}
`;
export const BackgroundImage = styled.div`
	width: 100%;
	height: 80%;
	position: relative;
	top: -40px;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: ${({ img }) => `url(${img})`};
`;

export const AddButton = styled.button`
	cursor: pointer;
	width: 130px;
	height: 30px;
	background: white;
	border: 1px solid black;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 13px;
	transition: 0.3s;
	&:hover {
		background: black;
		border: 1px solid black;
		color: white;
		font-weight: normal;
	}

	@media screen and (max-width: 800px) {
		width: 100px;
		height: 24px;
		font-size: 12px;
	}
`;

export const NameContainer = styled.span`
	font-size: 18px;
	text-transform: uppercase;
	color: #4d434f;
	font-weight: normal;
	word-wrap: break-word;
	position: relative;
	top: -40px;

	@media screen and (max-width: 800px) {
		font-size: 14px;
	}
`;

export const PriceContainer = styled.span`
	font-size: 24px;
	font-weight: 400;

	@media screen and (max-width: 800px) {
		font-size: 19px;
	}
`;

export const PriceAndShopButton = styled.div`
	position: relative;
	top: -35px;
	display: flex;
	justify-content: space-between;
`;
