const Quote = require("../models/quote.model");

module.exports.createNewQuote = (req, res) => {
    Quote.create(req.body)
        .then(newlyCreatedQuote => {
            res.json({ Quote: newlyCreatedQuote })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.findAllQuotes = ( req, res) => {
    Quote.find({})
        .then((quotes) => {
            res.json({ Quote: quotes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
        
module.exports.findOneQuote = (req, res) => {
    Quote.findOne({ _id: req.params.id })
        .then(oneQuote => {
            res.json({ Quote: oneQuote })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.findByType = (req, res) => {
    Quote.find({ type: req.params.type })
        .then(quotes => {
            res.json({ Quote: quotes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
        
module.exports.updateQuote = (req, res) => {
    Quote.findOneAndUpdate({ _id: req.params.id },
            req.body,
        { new: true, runValidators: true }
        )
        .then(updatedQuote => {
            res.json({ Quote: updatedQuote })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
        
module.exports.deleteQuote = (req, res) => {
    Quote.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
