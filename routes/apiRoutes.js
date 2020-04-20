const db = require("../models");
const router = require("express");

module.exports = app => {
    app.post("/api/workouts/", (req, res) => {

        db.Workout.create({})
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err)
            });
    });

    app.get("/api/workouts/", (req, res) => {

        db.Workout.find({})
            .then(dbWorkouts => {
                console.log(dbWorkouts)
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err)
            });
    });

    app.get("/api/workouts/range", (req, res) => {

        db.Workout.find({})
            .limit(7)
            .then(dbWorkouts => {
                console.log(dbWorkouts)
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.json(err)
            });
    });

    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
            .then((dbWorkouts) => {
                res.json(dbWorkouts);
            });
    });

};
