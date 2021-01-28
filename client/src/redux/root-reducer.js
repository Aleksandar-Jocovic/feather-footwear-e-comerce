import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import collectionsReducer from './collections/collections.reducer';
import homeMenuReducer from './home-menu/home-menu.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	collections: collectionsReducer,
	homeMenu: homeMenuReducer
});

export default persistReducer(persistConfig, rootReducer);
