const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(3000, () => {
    console.log(`App running on port ${PORT}!`);
});
