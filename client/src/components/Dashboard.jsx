import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from './Dropdown';

const Dashboard = () => {
    const [type, setType] = useState('');
    const navigate = useNavigate();

    const handleTypeChange = (selectedType) => {
        setType(selectedType);
    };

    const handleFindClick = () => {
        navigate(`/quoted/${type}`);
    
        }
    const logout = () => {
        axios.post('http://localhost:8000/api/words/logout', {}, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => console.log(err));
            
    };

    return (
        <div>
            <h1>Finding the right words...</h1>
            <div>
                <Dropdown type={type} setType={handleTypeChange} />
                <button className='btn btn-primary' onClick={handleFindClick}>Find</button>
                <button className='btn btn-success' onClick={() => navigate(`/quotes`)}>All Quotes</button>
                <button className='btn btn-warning' onClick={() => navigate(`/quote`)}>Add Quote</button>
                <button className='btn btn-danger' onClick={logout}>Log Out</button>
            </div>
        </div>
    );
};

export default Dashboard;

