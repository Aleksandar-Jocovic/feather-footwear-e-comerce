import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/CollectionItem';

import {
	CollectionPreviewContainer,
	PreviewContainer,
	TitleContainer
} from './collection-preview.styles';

const CollectionPreveiw = ({
	title,
	items,
	history,
	match,
	location,
	routeName
}) => {
	console.log(match, routeName);
	return (
		<CollectionPreviewContainer>
			<TitleContainer
				onClick={() =>
					history.push(`${location.path}/${decodeURI(routeName)}}`)
				}
			>
				{title.toUpperCase()}
			</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default withRouter(CollectionPreveiw);
