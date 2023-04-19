import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const OneQuote = (props) => {
    const [quoteList, setQuoteList] = useState({});
    const { id } = useParams(props); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/quote/${id}`)
            .then(res => {
                console.log(res.data);
                setQuoteList(res.data.Quote);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <p>Quote: {quoteList?.quote}</p>
            <p>Writer: {quoteList?.writer}</p>
            <p>Type: {quoteList?.type}</p>
            <button onClick={() => navigate(`/quotes`)}>All Quotes</button>
            <button onClick={() => navigate(`/dashboard`)}>Home</button>
        </div>
    );
}

export default OneQuote;

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import {useParams} from "react-router-dom";
// const OneQuote = (props) => {
//     const [quoteList, setQuoteList] = useState("");
//     const {id} = useParams(); 
//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/quote/${id}`)
//             .then( res => {
//                 console.log(res.data);
//                 setQuoteList(res.data.Quote);
//             })
//             .catch( err => console.log(err) );
//     }, []);
//     return (
//         <div>
//             <p>Quote: {quoteList.quote}</p>
//             <p>Writer: {quoteList.writer}</p>
//             <p>Type: {quoteList.type}</p>
//         </div>
//     );
// }
// export default OneQuote;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const OneQuote = (props) => {
//     const { id } = useParams();
//     const {quote, setQuote} = useState({});
//     const {writer, setWriter} = useState({});
//     const {type, setType} = useState({});
//     // const navigate = useNavigate();

// useEffect(() => {
//     axios.get(`http://localhost:8000/api/quote/${id}`)
//         .then(res => {
//             console.log(res.data);
//             setQuote(res.data.quote);
//             setWriter(res.data.writer);
//             setType(res.data.type);
//             })
//             .catch(err => console.log(err))
//     }, [])

//     return (
//         <div>
//             <p>Quote: {quote}</p>
//             <p>Writer: {writer}</p>
//             <p>Type: {type}</p>
//         </div>
//     );
// };

// export default OneQuote;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const OneQuote = (props) => {
//     const { id } = useParams(props);
//     const [oneQuote, setOneQuote] = useState([]);

//     useEffect(() => {
//         axios
//             .get(`http://localhost:8000/api/quote/${id}`)
//             .then((res) => {
//                 console.log(res.data);
//                 setOneQuote(res.data.quote);})
//             .catch((err) => {
//                 console.log(err); });}, [id]);                

//     return (
//         <div>
//             <h2>Quote: {oneQuote.quote}</h2>
//             <p>Writer: {oneQuote.writer}</p>
//             <p>Type: {oneQuote.type}</p>
//         </div>
//     );
// };

// export default OneQuote;
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// const OneQuote = () => {
//     const [oneQuote, setOneQuote] = useState({});
//     const { id } = useParams();

//     useEffect(() => {
//         axios
//             .get(`http://localhost:8000/api/quote/${id}`)
//             .then((res) => setOneQuote(res.data.oneQuote))
//             .catch((err) => console.log(err));
//     }, []);



//     return (
//         <div>
//             <h6>{oneQuote.quote}</h6>
//             <h5>{oneQuote.writer}</h5>
//             <p>
//                 {oneQuote.type} |
//                 <Link to={`/quotes/${oneQuote._id}`}>Edit</Link> |
//                 <Link to={`/quote`}>Add a Quote</Link>
//             </p>
//         </div>
//     );
// };

// export default OneQuote;


