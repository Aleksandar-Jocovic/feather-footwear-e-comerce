import { createSelector } from 'reselect';

const selectCollections = state => state.collections;

export const selectCollectionsData = createSelector(
	[selectCollections],
	collections => collections.collectionsData
);

export const selectCollectionsForPreview = createSelector(
	[selectCollectionsData],
	collectionsData =>
		collectionsData
			? Object.keys(collectionsData).map(key => collectionsData[key])
			: []
);

export const selectCollection = collectionUrlParam =>
	createSelector([selectCollectionsData], collectionsData =>
		collectionsData ? collectionsData[collectionUrlParam] : null
	);

export const selectIsCollectionFetching = createSelector(
	[selectCollections],
	collections => collections.isFetching
);

export const selectIsCollectionLoaded = createSelector(
	[selectCollections],
	collections => !!collections.collectionsData
);
