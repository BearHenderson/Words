import React from "react";
import axios from "axios";

const Dropdown = ({type, setType}) => {

    const handleOnChange = (event) => {
    setType(event.target.value);

    axios.get(`http://localhost:8000/api/quoted/${type}`)
        .then(res => {
            console.log(res.data);
            setType(res.data.Quote.type)
        }
        )
        .catch(err => console.log(err));
};

    return (
    <div>
        <label htmlFor="myDropdown">I am looking for:</label>
        <select id="myDropdown" value={type} onChange={handleOnChange}>
        <option value="">--Select--</option>
        <option value="Motivational">Motivational</option>
        <option value="Sympathetic">Sympathetic</option>
        <option value="Romantic">Romantic</option>
        <option value="Historical">Historical</option>
        <option value="Funny">Funny</option>
        <option value="Inspirational">Inspirational</option>
        <option value="Lyric">Lyric</option>
        </select>
        <p>Selected Type: {type}</p>
    </div>
    );
};

export default Dropdown;
