import React, { useState } from 'react';
import { connect } from 'react-redux';

import FromInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {
	googleSignInStart,
	emailSignInStart
} from '../../redux/user/user.actions';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: ''
	});

	const handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = userCredentials;
		emailSignInStart(email, password);
	};

	const handleChange = e => {
		const { value, name } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<h3>I already have an account.</h3>
			<span>Sing in with your email and password.</span>
			<form onSubmit={handleSubmit}>
				<FromInput
					type='text'
					name='email'
					value={userCredentials.email}
					handleChange={handleChange}
					label='email'
				/>
				<FromInput
					type='password'
					name='password'
					value={userCredentials.password}
					handleChange={handleChange}
					label='password'
				/>
				<ButtonsContainer>
					<CustomButton type='submit'> Sign in</CustomButton>
					<CustomButton
						type='button'
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						{' '}
						Sign in with Google
					</CustomButton>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
