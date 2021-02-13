import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAJW03_hnr5Xz0jWM2V9E8HeaP1pJySN-w',
	authDomain: 'feather-footwear.firebaseapp.com',
	projectId: 'feather-footwear',
	storageBucket: 'feather-footwear.appspot.com',
	messagingSenderId: '966854461001',
	appId: '1:966854461001:web:dcc74a9ab00a83be2c6198',
	measurementId: 'G-K0M9D6K861'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exist) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log('error creatin user', err.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

// add data to firestore
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollections = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: title.toLowerCase(),
			id: doc.id,
			title,
			items
		};
	});
	return transformedCollections.reduce((accumulator, collection) => {
		accumulator[collection.title] = collection;
		return accumulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
