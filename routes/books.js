const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const mongoose = require("mongoose");
const handleAsyncError = require("../handleAsyncError");

/* GET books listing. */
router.get(
	"/",
	handleAsyncError(async (req, res, next) => {
		const books = await Book.find().populate("author");
		res.json(books);
	})
);

router.get(
	"/:id",
	handleAsyncError(async (req, res, next) => {
		let book = await Book.findById(req.params.id);
		if (book) return res.json(book);
		res.json({ message: `Cannot get book with id ${req.params.id}` });
	})
);

router.post(
	"/",
	handleAsyncError(async (req, res, next) => {
		const newBook = new Book({
			title: req.body.title,
			author: req.body.author
		});

		await newBook.save();

		res.status(201).json({ message: `created a new book successfully` });
	})
);

router.put("/:id", (req, res, next) => {
	res.json({ message: `update book with id ${req.params.id}` });
});

router.delete("/:id", (req, res, next) => {
	res.json({ message: `delete book with id ${req.params.id}` });
});

module.exports = router;
