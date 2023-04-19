import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllQuotes = (props) => {
    const [quoteList, setQuoteList] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/quotes')
            .then((res) => {
                console.log(res.data);
                setQuoteList(res.data.Quote);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <button className='btn btn-primary'onClick={() => navigate('/dashboard')}>Home</button>
            <button className='btn btn-warning' onClick={() => navigate(`/quote`)}>Add Quote</button>
            <h1> All Quotes: </h1>
            <br/>
            {quoteList?.map((quote, index) => (
                <div key={index}>
                    <h4>Quote: {quote.quote}</h4>
                    <h6>Writer: {quote.writer}</h6>
                    <h6>Type: {quote.type}</h6>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => navigate(`/quotes/${quote._id}`)}>Edit</button>
                    <button type="button" className="btn btn-info btn-sm" onClick={() => navigate(`/quote/${quote._id}`)}>View</button>
                </div>
            ))}
        </div>
    );
};

export default AllQuotes;



// AllQuotes component
// import React, { useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const AllQuotes = (props) => {
//     const { quoteList, setQuoteList } = props;
//     const navigate = useNavigate();

//     useEffect(() => {
//     axios
//         .get("http://localhost:8000/api/quotes")
//         .then((res) => {
//             console.log(res.data);
//             quoteList(res.data.quote);
//         })
//         .catch((err) => console.log(err));
//     }, [setQuoteList]);

//     return (
//         <div>
//         <h2> All Quotes: </h2>
//         {quoteList?.map((quote, index) => (
//         <div key={index}>
//             <Link to={`/quote/${quote._id}`}>{quote.quote}</Link>
//             <button onClick={() => navigate(`/quote/${quote._id}`)}>Edit</button>
//         </div>
//         ))}
//     </div>
//     );
// };

// export default AllQuotes;

// import React, { useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const AllQuotes = (props) => {
//     const { quoteList, setQuoteList} = props;
//     const navigate = useNavigate();
//         useEffect(() => {
//             axios.get("http://localhost:8000/api/quotes")
//                 .then((res) => {
//                     console.log(res.data);
//                     setQuoteList(res.data.quote);})
//                 .catch((err) => console.log(err));},); 
            
//         return (
//             <div>
//                 <h2> All Quotes: </h2>
//                 { quoteList?.map((quote, index) => (
//                         <div key={index}>
//                             <Link to={`/quote/${quote._id}`}>
//                                 {quote.quote}
//                             </Link>
//                             <button onClick={() => navigate(`/quote/${quote._id}`)}>
//                             Edit
//                         </button>
//                         </div>))
//                         }
//             </div>
//         );
//     };
    
    
//     export default AllQuotes;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate} from "react-router-dom";

// const AllQuotes = () => {
//     const [quoteList, setQuoteList] = useState([]);
//     const navigate = useNavigate();
//         useEffect(() => {
//             axios.get("http://localhost:8000/api/quotes")
//                 .then((res) => {
//                     console.log(res.data);
//                     setQuoteList(res.data.quoteList);})
//                 .catch((err) => console.log(err));},[quoteList]); 

//     const navigateToNewQuote = () => {
//         navigate("/quote");
//     };

//     return (
//         <div>
//             <h1>All Quotes:</h1>
//         <button className="btn btn-info mt-3" onClick={navigateToNewQuote}>Add a quote</button>
//         <br/>
//                 {quoteList?.map((quote) => {
//                     return (
//                         <h6 key={quote.quote}>
//                         <h5> { quote.writer } </h5>
//                         <p>{ quote.type } </p>
//                         </h6>
//                     )
//                 })} 
//             </div>
//         );
//     };
    
    
//     export default AllQuotes;