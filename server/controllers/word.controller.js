const Word = require ("../models/word.model");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const bcrypt = require("bcrypt");

module.exports = {
    register: async (req, res) => {
    try {
        const potentialUser = await Word.findOne({ email: req.body.email });
        if (potentialUser) {
        res.status(400).json({ msg: "Email already exists" });
        } else {
        const newWordUser = await Word.create (req.body);
        const userToken = jwt.sign(
            {
            _id: newWordUser.id,
            email: newWordUser.email,
            },
            secret,
            { expiresIn: "1d" }
        );
        res.cookie("usertoken", userToken, {
            httpOnly: true,
            })
            .json({ msg: "success!", user: newWordUser });
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
    },
    
    login: async (req, res) => {
    try {
        const wordUser = await Word.findOne({ email: req.body.email });
        if (wordUser) {
            const correctPassword = await bcrypt.compare(req.body.password,wordUser.password);
            if (correctPassword) {
                const userToken = jwt.sign({ _id: wordUser.id,email: wordUser.email,},secret,{ expiresIn: "1d" });
                res.cookie("usertoken", userToken, {
                httpOnly: true,
            })
            .json({ msg: "success!", wordUser: wordUser });
            } else {
            res.status(400).json({ msg: "Invalid login attempt" });
        }
        } else {
        res.status(400).json({ msg: "Invalid login attempt" });
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
    },
    logout: (req, res) => {
    res.clearCookie("usertoken");
    res.json({ msg: "usertoken cookie cleared" });
    }}

    // getLoggedInUser: (req, res) => {
    // const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    // if (decodedJWT) {
    //     console.log(decodedJWT);
    // }
    // res.json};

module.exports.createNewWord = (req, res) => {
    Word.create(req.body)
        .then(newlyCreatedWord => {
            res.json({ word: newlyCreatedWord })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

// module.exports.findAllWords = ( req, res) => {
//     Word.find()
//         .then((allDbWord) => {
//             res.json({ word: allDbWord })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
        
// module.exports.findOneWord = (req, res) => {
//     Word.findOne({ _id: req.params.id })
//         .then(oneWord => {
//             res.json({ word: oneWord })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
        
// module.exports.updateWord = (req, res) => {
//     Word.findOneAndUpdate({ _id: req.params.id },
//             req.body,
//         { new: true, runValidators: true }
//         )
//         .then(updatedWord => {
//             res.json({ word: updatedWord })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
        
// module.exports.deleteWord = (req, res) => {
//     Word.deleteOne({ _id: req.params.id })
//         .then(result => {
//             res.json({ result: result })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}