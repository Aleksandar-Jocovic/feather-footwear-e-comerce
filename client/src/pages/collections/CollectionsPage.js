import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/Collection';

import './collections-page.styles.css';

const CollectionsPage = ({ match }) => {
	console.log(match);
	return (
		<div className='collections-page'>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default CollectionsPage;
