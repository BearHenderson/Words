import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ByType = (props) => {
    const [quoteList, setQuoteList] = useState([]);
    const { type } = useParams(props);
    const navigate = useNavigate();

    useEffect(() => {
    axios.get(`http://localhost:8000/api/quoted/${type}`)
        .then(res => {
        console.log(res.data);
        setQuoteList(res.data.Quote);
        })
        .catch(err => console.log(err));
    }, [type]);

    return (
    <div>
        <button className='btn btn-success' onClick={() => navigate('/dashboard')}>Home</button>
        <button className='btn btn-warning' onClick={() => navigate(`/quote`)}>Add Quote</button>
        <h1>Quotes by Type: {type}</h1>
        <br/>
        {quoteList.map(quote => (
            <div key={quote._id}>
            <h4>Quote: {quote.quote}</h4>
            <h6>Writer: {quote.writer}</h6>
            <h6>Type: {quote.type}</h6>
            <br/>
            </div>
        ))}
    </div>
    );
}

export default ByType;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ByType = (props) => {
//     const [quoteList, setQuoteList] = useState({});
//     const { type, setType } = useParams(); 

//     useEffect(() => {
//     axios.get(`http://localhost:8000/api/quoted/${type}`)
//         .then(res => {
//         console.log(res.data);
//         setQuoteList(res.data.Quote);
//         setType(res.data.Quote.type);
//         console.log(res.date.Quote.type)
//         })
//         .catch(err => console.log(err));
//     }, [type]);

//     return (
//     <div>
//         <h1>Quotes by Type: {type}</h1>
//         <ul>
//         {quoteList?.map(quote => (
//             <li key={quote._id}>
//             <p>Quote: {quoteList?.quote}</p>
//             <p>Writer: {quoteList?.writer}</p>
//             <p>Type: {quoteList?.type}</p>
//             </li>
//         ))}
//         </ul>
//     </div>
//     );
// }

// export default ByType;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ByType = () => {
//     const [quoteList, setQuoteList] = useState([]);
//     const { type } = useParams();

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/quote/${type}`)
//             .then((res) => {
//                 console.log(res.data);
//                 setQuoteList(res.data.Quote);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [type]);

//     return (
//         <div>
//             <h1> {type} Quotes: </h1>
//             <br/>
//             {quoteList?.map((quote, index) => (
//                 <div key={index}>
//                     <p>Quote: {quote.quote}</p>
//                     <h6>Writer: {quote.writer}</h6>
//                     <h6>Type: {quote.type}</h6>
//                     <br/>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ByType;
