import React from 'react'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

const LogReg = () => {
    return (
    <div className='row'>
        <h1>Welcome to Finding the Right Words...</h1>
        <h3>Just bought that blank card, feeling down, want to share some important words?</h3>
        <h3>Find the right words here!</h3>
        <h3>Register or Login to get started!</h3>
        <br/>
        <RegistrationForm/>
        <LoginForm/>
    </div>
    )
}

export default LogReg