import React, { useState } from 'react';

import FromInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './sign-in.styles.css'

const SignIn = () => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })


  const handleSubmit = e => {
    e.preventDefault();
    setUserCredentials({
      email: '',
      password: ''
    })
  }

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  console.log(userCredentials)

  return (
    <div className="sign-in">
      <h3>I already have an account.</h3>
      <span>Sing in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FromInput
          type="text"
          name="email"
          value={userCredentials.email}
          handleChange={handleChange}
          label="email"
        />
        <FromInput
          type="password"
          name="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="password"
        />
        <CustomButton type="submit"> Sign in</CustomButton>
      </form>
    </div>
  )
}

export default SignIn;
