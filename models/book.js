const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({

    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: String,
    link: String
});

const Books = mongoose.model("Book", booksSchema);

module.exports = Books;