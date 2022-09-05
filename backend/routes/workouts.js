const express = require("express");
const router = express.Router();

//destructuring
const {
  getAllWorkout,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

//GET all workouts
router.get("/", getAllWorkout);

//GET single workouts
router.get("/:id", getSingleWorkout);

//POST a new workouts
router.post("/", createWorkout);

//Delete a  workouts
router.delete("/:id", deleteWorkout);

//Update a workouts
router.patch("/:id", updateWorkout);

module.exports = router;
