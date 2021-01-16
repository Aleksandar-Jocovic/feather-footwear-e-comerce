import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./signin-signup.styles.css";

const SigninSignupPage = () => {
	return (
		<div className='signin-signup'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SigninSignupPage;
