import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const TitleContainer = styled.div`{
	font-size: 38px;
	margin: 0 auto 30px;
	text-transform: capitalize;
`;

export const ItemsContainer = styled.div`{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;
