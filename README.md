# Contacts App

## Programming Language Used
`Node.js`
`Javascript`

## Node Extension Used
`MongoDB`
`Express`

## Description
You can create a User by registering `http://Localhost:5001/user/register` 
and login an already registered user `http://Localhost:5001/user/login`
After Login a user you will be sent a token which you will use as a validation to create new contacts

### Actions
CREATE USER (POST): `http://Localhost:5001/user/register`
LOGIN USER (POST): `http://Localhost:5001/user/login`
CREATE NEW CONTACT (POST): `http://Localhost:5001/contact/`
GET ALL CONTACT CREATED (GET): `http://Localhost:5001/contact/`
UPDATE NEW CONTACT (PUT): `http://Localhost:5001/contact/contact-id`
GET A CONTACT (GET): `http://Localhost:5001/contact/contact-id`
DELETE A CONTACT (DELETE): `http://Localhost:5001/contact/contact-id`

### Start Project
`npm run dev`