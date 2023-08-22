const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models/userModel')

// access public
const registerUser = asyncHandler(async (req, res) =>{
    const {username, email, password} = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error('All input are mandatory')
    }
    const userAuthentication = await user.findOne({email})
    if(userAuthentication){
        res.status(400)
        throw new Error('User already exist')
    }

    // hach password
    const hachpassword = await bcrypt.hash(password, 10)
    console.log('hack password', hachpassword);
    const users = await user.create({
        username,
        email,
        password: hachpassword
    })
    if(users){ 
        res.status(201).json({
            _id: users._id,
            email: users.email
        })
    }
    else{
        res.status(400)
        throw new Error('User data not valid')
    }
})

// access public
const loginUser = asyncHandler(async (req, res) =>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('All input are mandatory')
    }
    const users = await user.findOne({email})
    if(users && (await bcrypt.compare(password, users.password))){
        const accessToken = jwt.sign({
            users: {
                username: users.username,
                email: users.email,
                _id: users._id
            }
        }, 
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: "15min"}
        );
        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error('email or password is not valid')
    }
})
// })

// access private
const currentUser = asyncHandler(async (req, res) =>{
    // const users = await UserActivation.find()
    res.json(req.users)
})

// {
//    "email": "danigod@gmail.com",
//    "password": "danigod"
// }



module.exports = {registerUser, loginUser, currentUser}  