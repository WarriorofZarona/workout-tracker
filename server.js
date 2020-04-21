const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

mongoose.connect("mongodb://heroku_kncc83sc:rd27jel68s5dh7d8b42ot48pg8@ds011268.mlab.com:11268/heroku_kncc83sc" || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(3000, () => {
    console.log(`App running on port ${PORT}!`);
});
