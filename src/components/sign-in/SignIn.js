import React from 'react'

const SignIn = () => {

  const handleChange = e => {
    e.preventDefault();
  }
  return (
    <div className="signin">
      <form action="submit">
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="email"
          value={'value'}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default SignIn
