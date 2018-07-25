const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// const getOrigins = () => {
// 	if (process.env.NODE_ENV === "production") {
// 		console.log("is prod!");
// 		return "https://week8-books-ui.herokuapp.com/";
// 	} else {
// 		console.log("is dev!");
// 		return "*";
// 	}
// };

const corsOptions = {
	// origin: ["http://localhost:3002", "https://week8-books-ui.herokuapp.com"]
	origin: getOrigins()
};

const index = require("./routes/index");
const books = require("./routes/books.js");
const authors = require("./routes/authors.js");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/", index);
app.use("/books", books);
app.use("/authors", authors);

module.exports = app;
