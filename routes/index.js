const express = require('express');
const router = express.Router();

const booksController = require("../controllers/bookController");

router.route("/books")
    .get(booksController.findAll)

router.route("/books/:id")
    .get(booksController.findById)
module.exports = router;