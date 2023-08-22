const express = require('express')
const router = express.Router();
// importation of all the Contact route functions
const {getContact, postContact, getContact2, putContact, deleteContact} = require('../controllers/contactController');
const validation = require('../middleware/validateToken');


// function routing
router.use(validation)
router.route('/').get(getContact).post(postContact) // routing to the GET and POST function
router.route('/:id').get(getContact2).put(putContact).delete(deleteContact) // routing to the GET, PUT and DELETE function


module.exports = router
 




// router.route('/').get(getContact)

// router.route('/').post(postContact)

// router.route('/:id').get(getContact2)

// router.route('/:id').put(putContact)

// router.route('/:id').delete(deleteContact)
