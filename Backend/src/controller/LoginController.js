const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const users = require('../models/users')

const createUsers = async(req,res) => {
    const {name,email,password}= req.body

    try{
        if (!name || name.length === 0) {
            return res.status(400).json({
                status: 400,
                message: "Name is Required"
            });
        }
        if (!email || email.length === 0) {
            return res.status(400).json({
                status: 400,
                message: "Email is Required"
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid Email Format"
            });
        }

        // Check if email already exists
        const existingUser = await users.findOne({ email,isDelete: false });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: "Email is already registered"
            });
        }

        if (!password || password.length === 0) {
            return res.status(400).json({
                status: 400,
                message: "Password is Required"
            });
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                status: 400,
                message: "Password must be 8 to 16 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userDetails = await users.create({name,email,password:hashedPassword,isDelete:false})


        res.status(201).json({
            status:201,
            message:"User Created Successfully",
            data:userDetails
        })

    }catch(error){
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }


}


const findUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || email.length === 0) {
            return res.status(400).json({
                status: 400,
                message: "Email is Required"
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid Email Format"
            });
        }

        // Check if email already exists
        const existingUser = await users.findOne({ email,isDelete: false });
        if (!existingUser) {
            return res.status(400).json({
                status: 400,
                message: "Email is not registered"
            });
        }

        if (!password || password.length === 0) {
            return res.status(400).json({
                status: 400,
                message: "Password is Required"
            });
        }

        // Compare hashed password
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(400).json({
                status: 400,
                message: "Incorrect password"
            });
        }
        // Generate access token
        const accessToken = jwt.sign({ userId: existingUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        // Generate refresh token
        const refreshToken = jwt.sign({ userId: existingUser._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });


        res.status(200).json({
            status: 200,
            message: "User Login successfully",
            accessToken,
            refreshToken,
            data: existingUser
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
}


const findAllUsers = async(req,res)=>{
    try{
        const allUserDetails = await users.find({ isDelete:false})
        res.status(200).json({
            status:200,
            message: "Users Retrieve Successfully",
            data:allUserDetails
        })

}catch(error){
    res.status(500).json({
        status:500,
        message:"Internal Server Error"
    })
}
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    try {
        if (!userId) {
            return res.status(400).json({
                status: 400,
                message: "User ID is required"
            });
        }

        const existingUser = await users.findOne({_id: userId, isDelete: false});

        if (!existingUser) {
            return res.status(404).json({ status: 404, message: "User not found." });
        }

        if (name) {
            existingUser.name = name;
        }

        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    status: 400,
                    message: "Invalid Email Format"
                });
            }
            existingUser.email = email;
        }

        if (password) {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
            if (!passwordRegex.test(password)) {
                return res.status(400).json({
                    status: 400,
                    message: "Password must be 8 to 16 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            existingUser.password = hashedPassword;
        }

        // Save the updated user details
        await existingUser.save();

        res.status(200).json({
            status: 200,
            message: "User Updated Successfully",
            data: existingUser
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
}


const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        if (!userId) {
            return res.status(400).json({
                status: 400,
                message: "User ID is required"
            });
        }

        const deleteUserDetails = await users.findOne({ _id: userId, isDelete: false });

        if (!deleteUserDetails) {
            return res.status(404).json({
                status: 404,
                message: "User not found"
            });
        }

        // Update isDelete to true
        deleteUserDetails.isDelete = true;

        // Save the updated user details
        await deleteUserDetails.save();

        res.status(200).json({
            status: 200,
            message: "User Deleted Successfully",
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
}








module.exports ={
    createUsers,
    findUser,
    findAllUsers,
    updateUser,
    deleteUser,
    
}