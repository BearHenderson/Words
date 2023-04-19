import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/words/login', userData, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate('/dashboard')
            })      
            .catch(err => console.log(err))
    }
    return (
    <div className='col-6'>
        <form className='col-md-8' onSubmit={submitHandler}>
            <h3 className='text-center'>Login:</h3>
            <div className='form-group'>
                <label className='form-label'>Email:</label>
                <input type='email' className='form-control' name='email' value= {userData.email} onChange={changeHandler}/>
            </div>
            <div className='form-group'>
                <label className='form-label'>Password:</label>
                <input type='password' className='form-control' name='password' value= {userData.password} onChange={changeHandler}/>
            </div>
            <div className='form-group'>    
                <button type='submit' className='btn btn-primary btn-block'>Login </button>
            </div>
        </form>
    </div>
    )
}

export default LoginForm