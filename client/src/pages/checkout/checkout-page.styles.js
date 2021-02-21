import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
	width: 55%;
	max-width: 420px;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	@media screen and (max-width: 800px) {
		margin: 50px auto 0;
		width: 90%;
		min-height: 90vh;
	}

	button {
		margin-left: auto;
		margin-top: 20px;
	}
`;

export const CheckoutHeaderContainer = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	text-align: center;
	width: 25%;
	@media screen and (max-width: 800px) {
		font-size: 14px;
	}
`;

export const TotalContainer = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
	@media screen and (max-width: 800px) {
		font-size: 24px;
	}
`;

export const TestWarningContainer = styled.div`
	text-align: center;
	margin: 40px 0 10px 0;
	font-size: 24px;
	color: red;
	@media screen and (max-width: 800px) {
		font-size: 18px;
	}
`;
