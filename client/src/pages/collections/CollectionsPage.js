import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/collections/collections.actions';

import Spinner from '../../components/spinner/Spinner';

import './collections-page.styles.css';

const CollectionsOverviewContainer = lazy(() =>
	import('../../components/collection-overview/CollectionsOverviewContainer')
);
const CollectionPageContainer = lazy(() =>
	import('../collection/CollectionPageContainer')
);

const CollectionsPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className='collections-page'>
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(CollectionsPage);
