const Goal = require("../models/goal");
const userService = require("../middleware/userService");
const mongoose = require("mongoose")

const createGoalType = async (req, res) => {
    const { goalType, target, progress, goalDeadline, currentstatus } = req.body;
    try {
        

        if (!goalType || !target || !progress || !goalDeadline || !currentstatus) {
            const missingFields = [];
            if (!goalType) missingFields.push('goalType');
            if (!target) missingFields.push('target');
            if (!progress) missingFields.push('progress');
            if (!goalDeadline) missingFields.push('goalDeadline');
            if (!currentstatus) missingFields.push('currentstatus');

            return res.status(400).json({
                status: 400,
                message: `Fields ${missingFields.join(', ')} are mandatory`
            });
        }

        const [day, month, year] = goalDeadline.split('-');

        // Create a new Date object with day, month, and year components
        const parsedGoalDeadline = new Date(`${day}-${month}-${year}`);

        // Check if the parsedGoalDeadline is a valid date
        if (isNaN(parsedGoalDeadline.getTime())) {
            return res.status(400).json({
                status: 400,
                message: `Invalid date format for goalDeadline. Please provide a valid date.`
            });
        }

        const goalDetails = await Goal.create({
            userId:req.user[0]._id,
            goalType,
            target,
            progress,
            goalDeadline: parsedGoalDeadline, 
            currentstatus
        });

        res.status(200).json({
            status: 200,
            message: "Goal Creating Successfully",
            data: goalDetails
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
};

const getGoalDetails = async (req, res) => {
    const userId = req.user[0]._id; 

    try {
        const GoalDetails = await Goal.find({ userId }); 

        if (!GoalDetails) {
            return res.status(404).json({
                status: 404,
                message: "Goal details not found for the user",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Goal Details Retrieved Successfully",
            data: GoalDetails,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};


const updateGoalDetails = async (req, res) => {
    const { id } = req.params;
    const { goalType, target, progress, goalDeadline, currentstatus } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid ID format",
            });
        }

        const updateFields = {};

        if (goalType !== undefined) {
            updateFields.goalType = goalType;
        }
        if (target !== undefined) {
            updateFields.target = target;
        }
        if (progress !== undefined) {
            updateFields.progress = progress;
        }
        if (goalDeadline !== undefined) {
            updateFields.goalDeadline = goalDeadline;
        }
        if (currentstatus !== undefined) {
            updateFields.currentstatus = currentstatus;
        }

        const updatedGoal = await Goal.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedGoal) {
            return res.status(404).json({
                status: 404,
                message: "Goal not found"
            });
        }

        res.status(200).json({
            status: 200,
            message: "Goal Details Updated Successfully",
            data: updatedGoal
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
};


const deleteGoalDetails = async (req, res) => {
    const { id } = req.params; // Extract 'id' directly from req.params
    try {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid ID format",
            });
        }
    
        const GoalDetails = await Goal.findByIdAndDelete(id); // Use 'id' directly

        if (!GoalDetails) {
            return res.status(404).json({
                status: 404,
                message: "Goal not found",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Goal Details Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};


const getOneGoalDetails = async (req,res)=>{
    const {id} = req.params;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid ID format",
            });
        }
        const findOneDetails = await Goal.findById(id)

        if(!findOneDetails){
            res.status(404).json({
                status:404,
                message:"Goal not found"
            })
        }

        res.status(200).json({
            status:200,
            message:"Goal Details Retrieve Successfully",
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
    createGoalType,
    getGoalDetails,
    updateGoalDetails,
    deleteGoalDetails,
    getOneGoalDetails
};