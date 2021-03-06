import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 80px;

	@media screen and (max-width: 800px) {
		width: 50px;
	}
`;

export const OptionsContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;

export const LogoImage = styled.img`
	width: 100%;
	height: auto;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	text-transform: uppercase;

	@media screen and (max-width: 800px) {
		font-size: 14px;
	}
`;
