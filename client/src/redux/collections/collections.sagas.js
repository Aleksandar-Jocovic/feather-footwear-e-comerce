import { takeLatest, call, put, all } from 'redux-saga/effects';
import CollectionsActionTypes from './collections.types';

import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure
} from './collections.actions';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		CollectionsActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}
