import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const RegistrationForm = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeHandler = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/words/register', userData, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/dashboard')
    })
    .catch(err => console.log(err))
    }
    
    
    return (
    <div className='col-6'>
        <form className='col-md-8' onSubmit={submitHandler}>
    <h3 className='text-center'>Register:</h3>
    <div className='form-group'>
        <label className='form-label'>First Name:</label>
        <input type='text' className='form-control' name='firstName' value= {userData.firstName} onChange={changeHandler}/>
    </div>
    <div className='form-group'>
        <label className='form-label'>Last Name:</label>
        <input type='text' className='form-control' name='lastName' value= {userData.lastName} onChange={changeHandler}/>
    </div>
    <div className='form-group'>
        <label className='form-label'>Email:</label> 
        <input type='email' className='form-control' name='email' value= {userData.email} onChange={changeHandler}/>
    </div>
    <div className='form-group'>
        <label className='form-label'>Password:</label>
        <input type='password' className='form-control' name='password' value= {userData.password} onChange={changeHandler}/>
    </div>
    <div className='form-group'>
        <label className='form-label'>Confirm Password:</label>
        <input type='password' className='form-control' name='confirmPassword' value= {userData.confirmPassword} onChange={changeHandler}/>
    </div>
    <div className='form-group'>
        <button type='submit' className='btn btn-primary btn-block'>Register </button>
    </div>
    
        </form>
    </div>
    )
}

export default RegistrationForm