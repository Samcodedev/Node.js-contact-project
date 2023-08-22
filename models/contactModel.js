const mongoose = require('mongoose')

const contactschema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'users'
    },
    name: {
        type: String,
        require: [true, 'Please add the contact name'],
    },
    email: {
        type: String,
        require: [true, 'Please add the contact mail address'],
    },
    phone: {
        type: String,
        require: [true, 'Please add the contact phone number'],
    }
},
{
    timestamps: true,
}) 

module.exports = mongoose.model('contact', contactschema)

/*
{
    "username": "samcode",
    "email": "samcode@gmail.com",
    "password": "123456"
}
*/


/* 
const postContact = asyncHandler( async (res, req) =>{
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('fill in all input')
    }
    const createUser = await contact.create({
        name,
        email,
        phone
    })
    res.status(200).json((createUser))
})
*/