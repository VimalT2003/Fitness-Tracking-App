const { Router } = require('express');
const router = Router();
const {verifyToken} = require('../middleware/userService')

const loginController = require('../controller/LoginController');
const GoalController = require("../controller/GoalController");
const WorkoutController = require("../controller/workoutController")

router.post('/signup', loginController.createUsers);
router.post('/login', loginController.findUser);
router.get('/users', loginController.findAllUsers);
router.put('/users/:id', loginController.updateUser);
router.delete('/users/:id', loginController.deleteUser);

//GoalController
router.post("/goals", verifyToken,GoalController.createGoalType)
router.get("/goals", verifyToken,GoalController.getGoalDetails)
router.put("/goals/:id", verifyToken,GoalController.updateGoalDetails)
router.delete("/goals/:id", verifyToken,GoalController.deleteGoalDetails)
router.get("/goals/:id", verifyToken, GoalController.getOneGoalDetails)


//WorkoutController
router.post("/workout", verifyToken,WorkoutController.createWorkoutType)
router.get("/workout", verifyToken,WorkoutController.getWorkOutDetails)
router.put("/workout/:id", verifyToken,WorkoutController.updateWorkoutType)
router.delete("/workout/:id", verifyToken,WorkoutController.deleteWorkoutDetails)
router.get("/workout/:id", verifyToken, WorkoutController.getOneWorkoutDetails)




module.exports = router;