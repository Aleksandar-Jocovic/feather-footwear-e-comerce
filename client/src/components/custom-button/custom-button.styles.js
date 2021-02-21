import styled, { css } from 'styled-components';

const googleButtonStyles = css`
	background-color: #4285f4;
	color: white;
	border: none;
	padding: 0 15px 0 15px;

	&:hover {
		background-color: #357ae8;
		color: white;
		border: none;
		font-weight: normal;
	}
`;

const getButtonStyles = props => {
	if (props.isGoogleSignIn) return googleButtonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 46px;
	letter-spacing: 1px;
	line-height: 46px;
	padding: 0 35px 0 35px;
	font-size: 14px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Roboto', sans-serif;
	font-weight: normal;
	border: 2px solid black;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		font-weight: bold;
		background-color: white;
		color: black;
		border: 2px solid black;
	}

	${getButtonStyles}

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;
