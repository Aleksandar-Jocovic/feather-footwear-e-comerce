import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import CollectionsPage from "./pages/collections/CollectionsPage";
import SigninSignupPage from "./pages/signin-signup/SigninSignupPage";
import Mens from "./pages/mens/Mens";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState(
						{
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						},
						() => {
							console.log(this.state);
						}
					);
				});
			} else this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/signin' component={SigninSignupPage} />
					<Route exact path='/collections' component={CollectionsPage} />
					<Route exact path='/mens' component={Mens} />
				</Switch>
			</div>
		);
	}
}

export default App;
