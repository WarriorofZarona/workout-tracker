

// Code here
// According to the api.js file, links need to go to /api/workouts/ for getLastWorkout
// /api/workouts/id to addExercise
// /api/workouts to createWorkout
// /api/workouts/range to getWorkoutsInRange

const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts)
        })
    });


    app.put("/api/workouts/:id", function (req, res) {
        console.log(req.body)
        console.log(req.paramds.id)
        db.Image.update({ _id: req.params.id }, { $push: { exercises: req.body } }).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    //     app.post("api/workouts/", (req, res) => {

    //         console.log(req.body)
    //         db.Workout.insert(req.body)
    //     })
};
