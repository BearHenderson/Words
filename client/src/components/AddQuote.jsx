import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import RadioButtons from "./RadioButtons";

const AddQuote = (props) => {
    const [quoteList, setQuoteList] = useState([]);
    const [quote, setQuote] = useState("");
    const [writer, setWriter] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const navigate = useNavigate();

    const handleTypeChange = (type) => {
        setSelectedType(type);
        console.log(type);
    };


    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/quote", { quote, writer, type: selectedType })
        .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.Quote.type);
        setQuoteList([...quoteList, res.data]);
        setQuote("");
        setWriter("");
        setSelectedType("");
        })
        .catch((err) => {
        console.log(err);
        });
    navigate("/quotes");
    };

    return (
    <div>
        <button className="btn btn-success" onClick={() => navigate("/dashboard")}>Home</button>
        <h1>Add a Quote</h1>
        <form action="" className="form col-md-6 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group mt-3">
            {quote && quote.length < 2 ? (
            <p className="text-danger">Quote must be at least 2 characters</p>
            ) : (
            ""
            )}
            <label htmlFor="" className="form-label">
            Quote:{' '}
            </label>
            <input type="text" name="quote" className="form-control" onChange={(e) => setQuote(e.target.value)} />
        </div>
        <div className="form-group mt-3">
            {writer && writer.length < 2 ? (
            <p className="text-danger">Writer must be at least 2 characters</p>
            ) : (
            ""
            )}
            <label htmlFor="" className="form-label">
            Writer:{' '}
            </label>
            <input type="text" name="writer" className="form-control" onChange={(e) => setWriter(e.target.value)} />
        </div>
        <div className="form-group mt-3">
            <label htmlFor="" className="form-label">
            Type:{' '}
            </label>
            <RadioButtons onTypeChange= {handleTypeChange}/>
        </div>
        </form>
    </div>
    );
};

export default AddQuote;

