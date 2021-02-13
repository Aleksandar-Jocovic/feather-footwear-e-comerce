import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionPage from './CollectionPage';

import { selectIsCollectionLoaded } from '../../redux/collections/collections.selector';

import WithSpinner from '../../components/with-spinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionsPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;
