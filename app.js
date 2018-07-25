const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const corsOptions = {
	origin:
		process.env.NODE_ENV === "production"
			? "https://week8-books-ui.herokuapp.com"
			: "http://localhost:3001"
};

const index = require("./routes/index");
const books = require("./routes/books.js");
const authors = require("./routes/authors.js");

const app = express();
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());

app.use("/", index);
app.use("/books", books);
app.use("/authors", authors);

module.exports = app;
