const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, "Quote is required"],
        minlength: [2, "Quote must be at least 2 characters."]
    },
    writer: {
        type: String,
        required: [true, "Writer is required"],
        minlength: [2, "Writer must be at least 2 characters or unknown."]
    },
    type: {
        type: String, } },
    {timestamps: true});


const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;
