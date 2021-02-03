import CollectionsActionTypes from './collections.types';

const INITIAL_STATE = {
	collectionsData: null
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CollectionsActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collectionsData: action.payload
			};
		default:
			return state;
	}
};

export default collectionsReducer;
