import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionOverview from './CollectionOverview';

import { selectIsCollectionFetching } from '../../redux/collections/collections.selector';

import WithSpinner from '../with-spinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
