import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	padding: 20px 60px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 80px;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const LogoImage = styled.img`
	width: 100%;
	height: auto;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	text-transform: uppercase;
`;
