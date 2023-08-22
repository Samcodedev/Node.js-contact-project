const asyncHandler = require('express-async-handler')
const contact = require('../models/contactModel')
//  a contact route functions GET,POST,PUT,DELETE requests
 
 //@desk GET all contacts
 //@route GET /api/contacts
 //@access public

 const getContact = asyncHandler(async (req, res) =>{
    const contacts = await contact.find({user_id: req.users._id})
    res.status(200).json(contacts);
    // res.status(200).json({message:  "Get all contacts hello"});
})

 //@desk POST all contacts
 //@route POST /api/contacts
 //@access public

 const postContact = asyncHandler(async (req, res) =>{
    // console.log(req.body);
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('All field are mandatory !')
    }
    const contacts = await contact.create({
        name,
        email,
        phone,
        user_id: req.users._id
    })

    res.status(200).json((contacts));
})


 //@desk GET all contacts   
 //@route GET /api/contacts
 //@access public

 const getContact2 = asyncHandler(async (req, res) =>{
    const contacts = await contact.findById(req.params.id)
    if(!contacts){
        res.status(400)
        throw new Error('Contact not found')
    }
    res.status(200).json(contacts);
})

 //@desk PUT all contacts
 //@route PUT /api/contacts 
 //@access public

 const putContact = asyncHandler(async (req, res) =>{
    const contacts = await contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error('Contact not found')
    }
    if(contacts.user_id.toString() !== req.users._id){
        res.status(403)
        throw new Error('User do not have permission to update this contacts')
    }
    const updateContact = await contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )
    res.status(200).json({updateContact});
})

//@desk DELETE all contacts
//@route DELETE /api/contacts
//@access public 

const deleteContact = asyncHandler(async (req, res) =>{
    const contacts = await contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error('Contact not found')
    }
    if(contacts.user_id.toString() !== req.users._id){
        res.status(403)
        throw new Error('User do not have permission to delete this conatact')
    } 
    const deleteContact = await contact.findByIdAndDelete(
        req.params.id
    )
    res.status(200).json(deleteContact);
})

module.exports = {getContact, postContact, getContact2, putContact, deleteContact}