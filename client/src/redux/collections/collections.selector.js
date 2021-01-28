import { createSelector } from 'reselect';

const selectCollections = state => state.collections;

export const selectCollectionsData = createSelector(
	[selectCollections],
	collections => collections.collectionsData
);

export const selectCollectionsForPreview = createSelector(
	[selectCollectionsData],
	collectionsData =>
		Object.keys(collectionsData).map(key => collectionsData[key])
);

export const selectCollection = collectionUrlParam =>
	createSelector(
		[selectCollectionsData],
		collectionsData => collectionsData[collectionUrlParam]
	);
