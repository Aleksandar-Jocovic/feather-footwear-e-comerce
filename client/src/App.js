import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import { GlobalStyle } from './global.styles';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import { selectCartItems } from './redux/cart/cart.selectors';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const CollectionsPage = lazy(() =>
	import('./pages/collections/CollectionsPage')
);
const SigninSignupPage = lazy(() =>
	import('./pages/signin-signup/SigninSignupPage')
);
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div className='App'>
			<GlobalStyle />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path='/' component={HomePage} />
						<Route path='/collections' component={CollectionsPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route
							exact
							path='/signin'
							render={() =>
								currentUser ? <Redirect to='/' /> : <SigninSignupPage />
							}
						/>
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
