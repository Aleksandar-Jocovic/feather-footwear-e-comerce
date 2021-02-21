import styled from 'styled-components';

export const SigninSignupContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		* {
			margin-bottom: 10px;
		}
	}
`;
