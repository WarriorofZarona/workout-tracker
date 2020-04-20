const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ExerciseSchema = new Schema({
//     type: String,
//     name: String,
//     duration: Number,
//     weight: Number,
//     reps: Number,
//     sets: Number,
//     distance: Number
// });

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
        },
        weight: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        }

    }]
},
    {
        toJSON: {
            virtuals: true
        }
    });

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

WorkoutSchema.virtual("totalWeight").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.weight;
    }, 0);
});

WorkoutSchema.virtual("totalReps").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.reps;
    }, 0);
});

WorkoutSchema.virtual("totalSets").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.sets;
    }, 0);
});

WorkoutSchema.virtual("totalDistance").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.distance;
    }, 0);
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
