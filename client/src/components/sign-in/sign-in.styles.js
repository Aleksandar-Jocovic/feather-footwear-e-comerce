import styled from 'styled-components';

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
	span {
		margin: 10px 0 15px 0;
		color: rgb(102, 102, 102);
	}
	@media screen and (max-width: 800px) {
		width: 90vw;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		* {
			margin-bottom: 10px;
		}
	}
`;
