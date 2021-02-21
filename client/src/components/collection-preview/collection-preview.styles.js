import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
	min-width: 100%;
	overflow: hidden;
	margin-bottom: 50px;
`;

export const PreviewContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;

export const TitleContainer = styled.h2`
	cursor: pointer;
	margin-bottom: 15px;
	@media screen and (max-width: 800px) {
		text-align: center;
	}
`;
