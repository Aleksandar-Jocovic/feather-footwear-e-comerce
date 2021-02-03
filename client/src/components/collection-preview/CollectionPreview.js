import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/CollectionItem';

import './collection-preview.styles.css';

const CollectionPreveiw = ({ title, items, history, match, routeName }) => {
	console.log(match);
	return (
		<div className='collection-preview'>
			<h2
				className='title'
				onClick={() => history.push(`${match.path}/${routeName}}`)}
			>
				{title.toUpperCase()}
			</h2>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default withRouter(CollectionPreveiw);
