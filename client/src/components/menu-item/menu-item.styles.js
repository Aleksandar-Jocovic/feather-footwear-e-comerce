import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	min-width: 49.5%;
	height: 40vh;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid white;
	text-transform: uppercase;
	margin-bottom: 5px;
	overflow: hidden;
	position: relative;

	&:hover {
		cursor: pointer;
		& .content {
			background-color: rgba(255, 255, 255, 0.6);
		}

		.& .background-image {
			transform: scale(1.1);
		}
	}

	&:nth-child(1) {
		min-width: 100%;
	}

	@media screen and (max-width: 800px) {
		min-width: 100%;
	}
`;

export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	transition: transform 4s ease-in;
	background-image: ${({ coverImage }) => `url(${coverImage})`};
`;

export const ContentConatiner = styled.div`
	height: 100px;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid white;
	background-color: rgba(255, 255, 255, 0.7);
	position: absolute;
`;

export const CotnentTitle = styled.span`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: rgb(77, 76, 76);
`;

export const CotnentSubtitle = styled.span`
	font-weight: normal;
	font-size: 16px;
`;
