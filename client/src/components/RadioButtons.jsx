import React, { useState } from "react";

const RadioButtons = ({ onTypeChange }) => {
    const [type, setType] = useState("");

    const changeHandler = (e) => {
    setType(e.target.value);
    onTypeChange(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    };

    return (
    <div
        onSubmit={handleSubmit}>
        <label htmlFor="radio1">
            <input
            type="radio"
            id="radio1"
            name="type"
            value="Motivational"
            checked={type === "Motivational"}
            onChange={changeHandler}
            />
            Motivational |
        </label>
        <label htmlFor="radio2">
            <input
            type="radio"
            id="radio2"
            name="type"
            value="Sympathetic"
            checked={type === "Sympathetic"}
            onChange={changeHandler}
            />
            Sympathetic |
        </label>
        <label htmlFor="radio3">
            <input
            type="radio"
            id="radio3"
            name="type"
            value="Romantic"
            checked={type === "Romantic"}
            onChange={changeHandler}
            />
            Romantic |
        </label>
        <label htmlFor="radio4">
            <input
            type="radio"
            id="radio4"
            name="type"
            value="Historical"
            checked={type === "Historical"}
            onChange={changeHandler}
            />
            Historical |
        </label>
        <label htmlFor="radio5">
            <input
            type="radio"
            id="radio5"
            name="type"
            value="Funny"
            checked={type === "Funny"}
            onChange={changeHandler}
            />
            Funny |
        </label>
        <label htmlFor="radio6">
            <input
            type="radio"
            id="radio6"
            name="type"
            value="Inspirational"
            checked={type === "Inspirational"}
            onChange={changeHandler}
            />
            Inspirational |
        </label>
        <label htmlFor="radio7">
            <input
            type="radio"
            id="radio7"
            name="type"
            value="Lyric"
            checked={type === "Lyrics"}
            onChange={changeHandler}
            />
            Lyric |
        </label>
        <p>Selected Type: {type}</p>
        <button className="btn btn-info" type="submit">Submit</button>
    </div>
    );
};

export default RadioButtons;

