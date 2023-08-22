const express = require('express')
const { registerUser, loginUser, currentUser } = require('../controllers/usersController')
const validation = require('../middleware/validateToken')
const router = express.Router()
// const { route } = require('./contactRoutes')

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/current', validation, currentUser)


// module.exports = route
module.exports = router;



/* 
TensorFlow.js
Brain.js
Synaptic
ML5.js
ConvNetJS

Keras.js
Mind
Neuro.js
*/