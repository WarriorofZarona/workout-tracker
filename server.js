const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "workouts";
const collections = ["session"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
    console.log("Database Error:", error);
});

// Code here
// According to the api.js file, links need to go to /api/workouts/ for getLastWorkout
// /api/workouts/id to addExercise
// /api/workouts to createWorkout
// /api/workouts/range to getWorkoutsInRange

app.listen(3000, () => {
    console.log("App running on port 3000!");
});
