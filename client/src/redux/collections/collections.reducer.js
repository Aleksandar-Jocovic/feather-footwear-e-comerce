import COLLECTIONS_DATA from './collections-data';

const INITIAL_STATE = {
	collectionsData: COLLECTIONS_DATA
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default collectionsReducer;
