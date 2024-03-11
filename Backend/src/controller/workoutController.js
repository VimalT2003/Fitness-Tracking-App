const Workout = require('../models/workout');
const userService = require("../middleware/userService");
const mongoose = require("mongoose")

const createWorkoutType = async (req, res) => {
    const { workoutType, Duration, intensity, workoutDate } = req.body; // Changed from Date to workoutDate
    try {
        if (!workoutType || !Duration || !intensity || !workoutDate) {
            const missingFields = [];
            if (!workoutType) missingFields.push('workoutType');
            if (!Duration) missingFields.push('Duration');
            if (!intensity) missingFields.push('intensity');
            if (!workoutDate) missingFields.push('workoutDate');
            return res.status(400).json({
                status: 400,
                message: `Fields ${missingFields.join(', ')} are mandatory`
            });
        }

        const [day, month, year] = workoutDate.split('-');
        
        // Create a new Date object with day, month, and year components
        const parsedWorkoutDate = new Date(`${day}-${month}-${year}`);
        
        // Check if the parsedWorkoutDate is a valid date
        if (isNaN(parsedWorkoutDate.getTime())) {
            return res.status(400).json({
                status: 400,
                message: `Invalid date format for workoutDate. Please provide a valid date.`
            });
        }

        const workoutDetails = await Workout.create({
            userId: req.user[0]._id,
            workoutType,
            Duration, 
            intensity,
            workoutDate: parsedWorkoutDate,
        });

        res.status(200).json({
            status: 200,
            message: "Workout Created Successfully",
            data: workoutDetails
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
};


const updateWorkoutType = async (req, res) => {
    const { id } = req.params;
    const { workoutType, Duration, intensity, workoutDate } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid ID format",
            });
        }

        const updateFields = {};

        if (workoutType) {
            updateFields.workoutType = workoutType;
        }
        if (Duration) {
            updateFields.Duration = Duration;
        }
        if (intensity) {
            updateFields.intensity = intensity;
        }
        if (workoutDate) {
            const [day, month, year] = workoutDate.split('-');
            const parsedWorkoutDate = new Date(`${day}-${month}-${year}`);

            if (isNaN(parsedWorkoutDate.getTime())) {
                return res.status(400).json({
                    status: 400,
                    message: `Invalid date format for workoutDate. Please provide a valid date.`,
                });
            }

            updateFields.workoutDate = parsedWorkoutDate;
        }

        const workoutDetails = await Workout.findByIdAndUpdate(id, updateFields, { new: true });

        if (!workoutDetails) {
            return res.status(404).json({
                status: 404,
                message: "Workout not found",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Workout Updated Successfully",
            data: workoutDetails,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};

const getWorkOutDetails = async(req,res) => {
    const userId = req.user[0]._id; 
    try{
    const workoutDetails = await Workout.find({userId})
     res.status(200).json({
        status:200,
        message:"Workout Details Retrieve SuccessFully",
        data:workoutDetails
     })   
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            status:500,
            message:"Internal  Server Error"
        })
    }
}

const deleteWorkoutDetails = async(req,res) => {
    const{id} = req.params;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid ID format",
            });
        }

    const workoutDetails = await Workout.findByIdAndDelete(id)
     res.status(200).json({
        status:200,
        message:"Workout Details Deleted SuccessFully",
     })   
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            status:500,
            message:"Internal  Server Error"
        })
    }
}

const getOneWorkoutDetails = async (req,res)=>{
    const {id} = req.params;
    try{

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid ID format",
            });
        }
        const findOneDetails = await Workout.findById(id)

        if(!findOneDetails){
            res.status(404).json({
                status:404,
                message:"Workout not found"
            })
        }

        res.status(200).json({
            status:200,
            message:"Workout Details Retrieve Successfully",
            data:findOneDetails
        })

    }catch(error){
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }
}


module.exports = {
    createWorkoutType,
    updateWorkoutType,
    getWorkOutDetails,
    deleteWorkoutDetails,
    getOneWorkoutDetails
}
