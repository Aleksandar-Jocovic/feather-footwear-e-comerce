import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import { SigninSignupContainer } from './signin-signup.styles';

const SigninSignupPage = () => {
	return (
		<SigninSignupContainer>
			<SignIn />
			<SignUp />
		</SigninSignupContainer>
	);
};

export default SigninSignupPage;
