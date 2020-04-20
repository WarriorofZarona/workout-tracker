

// Code here
// According to the api.js file, links need to go to /api/workouts/ for getLastWorkout
// /api/workouts/id to addExercise
// /api/workouts to createWorkout
// /api/workouts/range to getWorkoutsInRange

const db = require("../models");
const router = require("express");

module.exports = app => {

    app.post("/api/workouts/", (req, res) => {

        console.log(req.body)
        db.Workout.create({})
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err)
            })
    })



    app.get("/api/workouts/", (req, res) => {

        db.Workout.find({})
            .then(dbWorkouts => {
                console.log(dbWorkouts)
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err)
            })
    })


    app.get("/api/workouts/range", (req, res) => {

        db.Workout.find({})
            .limit(7)
            .then(dbWorkouts => {
                console.log(dbWorkouts)
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err)
            })
    })


    app.put("/api/workouts/:id", function (req, res) {
        console.log(req.body)
        console.log(req.params.id)
        db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } }).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        });
    });


};
