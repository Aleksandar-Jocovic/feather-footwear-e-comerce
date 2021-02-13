import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.css';

const SingnUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleSubmit = async e => {
		e.preventDefault();
		const { password, confirmPassword } = userCredentials;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		signUpStart(userCredentials);
	};

	const handleChange = e => {
		const { value, name } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form action='' className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={userCredentials.displayName}
					onChange={handleChange}
					label='Display Name'
				/>
				<FormInput
					type='email'
					name='email'
					value={userCredentials.email}
					onChange={handleChange}
					label='Email'
				/>
				<FormInput
					type='password'
					name='password'
					value={userCredentials.password}
					onChange={handleChange}
					label='Password'
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={userCredentials.confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
				/>
				<CustomButton type='submit'>sign up</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SingnUp);
