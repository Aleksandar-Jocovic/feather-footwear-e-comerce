import styled from 'styled-components';

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	span {
		margin: 10px 0 15px 0;
		color: rgb(102, 102, 102);
	}
	@media screen and (max-width: 800px) {
		width: 90vw;
	}
`;
