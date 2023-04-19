import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RadioButtons from './RadioButtons'; // Replace with the path to your custom radio component

const EditQuote = (props) => {
    const { id } = useParams();
    const [quote, setQuote] = useState('');
    const [writer, setWriter] = useState('');
    const [selectedType, setSelectedType] = useState("");
    const { removeFromDB, quoteList, setQuoteList } = props;
    const navigate = useNavigate();

    const handleTypeChange = (type) => {
        setSelectedType(type);
        console.log(type);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/quote/${id}`)
            .then((res) => {
                console.log(res.data);
                setQuote(res.data.quote);
                setWriter(res.data.writer);
                setSelectedType(res.data.type);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const updateQuote = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/quotes/${id}`, { quote, writer, type: selectedType })
            .then((res) => navigate(`/quote/${id}`))
            .catch((err) => console.log(err));
    };

    const deleteQuote = (id) => {
        axios.delete(`http://localhost:8000/api/quotes/${id}`)
            .then(() => {
                removeFromDB(id);
                navigate('/dashboard');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1 className="mx-auto">Edit Quote</h1>
            <Link to="/dashboard">Dashboard</Link>
            <form onSubmit={updateQuote} className="col-md-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="quote">Quote:</label>
                    <input onChange={(e) => setQuote(e.target.value)} value={quote} name="quote" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="writer">Writer:</label>
                    <input onChange={(e) => setWriter(e.target.value)} value={writer} name="writer" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <RadioButtons onTypeChange={handleTypeChange} selectedType={selectedType} />
                </div>
                {/* <button className="btn btn-info" type="submit">Update</button> */}
                <button className="btn btn-danger" onClick={(e) => deleteQuote(id)}>Delete </button>
            </form>
        </div>
    );
};

export default EditQuote;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import RadioButtons from './RadioButtons'; // Replace with the path to your custom radio component

// const EditQuote = (props) => {
//     const { id } = useParams();
//     const [quote, setQuote] = useState('');
//     const [writer, setWriter] = useState('');
//     const [selectedType, setSelectedType] = useState("");
//     const { removeFromDB, quoteList, setQuoteList } = props;
//     const navigate = useNavigate();

//     const handleTypeChange = (type) => {
//         setSelectedType(type);
//         console.log(type);
//     };

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/quote/${id}`, { quote, writer, type: selectedType })
//             .then((res) => {
//                 console.log(res.data);
//                 setQuoteList(res.data.Quote);
//                 setQuote(res.data.quote);
//                 setWriter(res.data.writer);
//                 setSelectedType(res.data.type);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     const updateQuote = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:8000/api/quotes/${id}`, { quote, writer, type: selectedType })
//             .then((res) => navigate('/dashboard'))
//             .catch((err) => console.log(err));
//     };

//     const deleteQuote = (id) => {
//         axios.delete(`http://localhost:8000/api/quotes/${id}`)
//         .then(() => {
//                 removeFromDB(id);
//                 navigate('/dashboard');
//             })
//             .catch((err) => console.log(err));
//     };

//     return (
//         <div>
//             <h1 className="mx-auto">Edit Quote</h1>
//             <Link to="/dashboard">Dashboard</Link>
//             <form action="" className="col-md-6 mx-auto">
//                 <div className="form-group">
//                     <label htmlFor="quote">Quote:</label>
//                     <input onChange={(e) => setQuote(e.target.value)} value={quote} name="quote" type="text" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="writer">Writer:</label>
//                     <input onChange={(e) => setWriter(e.target.value)} value={writer} name="writer" type="text" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="type">Type:</label>
//                     <RadioButtons onTypeChange= {handleTypeChange}/>
//                 </div>
//                 <button className="btn btn-info" onSubmit={updateQuote}></button>
//                 <button className="btn btn-danger" onClick={(e) => deleteQuote(id)}>Delete </button>
//             </form>
//         </div>
//     );
// };

// export default EditQuote;

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link, useNavigate, useParams } from "react-router-dom";

// const EditQuote = (props) => {
//     const { id } = useParams(); 
//     const [quote, setQuote] = useState("");
//     const [writer, setWriter] = useState("");
//     const [type, setType] = useState("");
//     const {removeFromDB, quoteList, setQuoteList} = props;
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/quote/${id}`, {quote, writer, type})
//             .then(res => {
//                 console.log(res.data);
//                 setQuote(res.data.quote);
//                 setWriter(res.data.writer);
//                 setType(res.data.type);
//             })
//             .catch(err => console.log(err))
//     }, [])

//     const updateQuote = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:8000/api/quotes/${id}`, {quote, writer, type})
//             .then(res => navigate("/dashboard"))
//             .catch(err => console.log(err))
//     }

//     // const submitHandler = (e) => {
//     //             e.preventDefault();
    

//     //     axios.put(`http://localhost:8000/api/quotes/${id}`, {quote, writer,type})
//     //         .then(res => {
//     //             console.log(res);
//     //             navigate("/dashboard"); 
//     //         })
//     //         .catch(err => console.log(err))
//     // }

//     const deleteQuote = (id) => {
//         axios.delete(`http://localhost:8000/api/quotes/${id}`)
//         .then(() => {
//             removeFromDB(id);
//             navigate("/dashboard");
//         })
//         .catch((err) => console.log(err));
//     };

//     return (
//         <div>
//         <h1 className="mx-auto">Edit Quote</h1><Link to="/dashboard">Dashboard</Link>
//         <form action="" className="col-md-6 mx-auto" onSubmit={updateQuote}>
//             <div className="form-group">
//                 <label htmlFor="quote">Quote:</label>
//                 <input onChange={(e) => setQuote(e.target.value)} value={quote} name="quote" type="text"/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="writer">Writer:</label>
//                 <input onChange={(e) => setWriter(e.target.value)} value={writer} name="writer" type="text"/>
//             </div>
//         <div className="form-group">
//                 <label htmlFor="type">Type:</label>
//                 <input onChange={(e) => setType(e.target.value)} value={type} name="type" type="text"/>
//         </div>
//             <button className="btn btn-info">Update Quote</button>
            
//         <button className="btn btn-danger" onClick={(e) => deleteQuote(id)}>Delete</button>
//         </form>
//     </div>
//     )
// }

// export default EditQuote

// import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import axios from 'axios';


// const EditQuote = (props) => {
//     const {id} = useParams();
//     const [oneQuote, setOneQuote] = useState({quote:"", writer:"", type:""});
//     const {removeFromDB, quoteList, setQuoteList} = props;
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`http://localhost:8000/api/quote/${id}`)
//             .then(res => setOneQuote({quote: res.data.quote }))
//             .catch(err => console.log(err))
//     }, [id])

//     const changeHandler = (e) => {
//         setOneQuote({
//             ...oneQuote,
//             [`${e.target.name}`]: e.target.value
//         })
//     }

//     const updateQuote = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:8000/api/quotes/${id}`, oneQuote)
//             .then(res => navigate("/dashboard"))
//             .catch(err => console.log(err))
//     }

//     // const deleteQuote = (id) => {
//     //     axios.delete(`http://localhost:8000/api/quotes/${id}`)
//     //         .then(res => {
//     //             const filteredQuotes = oneQuote.filter(oneQuote => oneQuote._id !== id)
//     //                 setOneQuote(filteredQuotes)})
//     //         .catch(err => console.log(err))}
//     const deleteQuote = (id) => {
//         axios.delete(`http://localhost:8000/api/quotes/${id}`)
//             .then(() => {
//                 removeFromDB(id);
//                 navigate("/dashboard");
//                 })
//             .catch((err) => console.log(err));
//             };


// return (
//     <div>
//         <h1 className="mx-auto">Edit Quote</h1><Link to="/dashboard">Dashboard</Link>
//         <form action="" className="col-md-6 mx-auto" onSubmit={updateQuote}>
//             <div className="form-group">
//                 <label htmlFor="quote">Quote:</label>
//                 <input type="text" name="quote" id="quote" className="form-control" value={oneQuote.quote} onChange={changeHandler}/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="writer">Writer:</label>
//                 <input type="text" name="writer" id="writer" className="form-control" value={oneQuote.writer} onChange={changeHandler}/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="type">Type:</label>
//                 <input type="text" name="type" id="type" className="form-control" value={oneQuote.type} onChange={changeHandler}/>
//             </div>
//             <button className="btn btn-info">Update Quote</button>
            
//             <button className="btn btn-danger" onClick={(e) => deleteQuote(oneQuote._id)}>Delete</button>
//         </form>
//     </div>
//     )
// }

// export default EditQuote