import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/collections/collections.selector';
import CollectionsActionTypes from '../../redux/collections/collections.types';

import CollectionPreview from '../collection-preview/CollectionPreview';

import './collection-overview.styles.css';

const CollectionsOverview = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionsProps }) => {
				return <CollectionPreview key={id} {...otherCollectionsProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
