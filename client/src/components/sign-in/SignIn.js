import React, { useState } from "react";

import FromInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.css";

const SignIn = () => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = userCredentials;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setUserCredentials({
				email: "",
				password: "",
			});
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = e => {
		const { value, name } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
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
				<div className='buttons'>
					<CustomButton type='submit'> Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						{" "}
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
