const { constants } = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    if(statusCode === constants.VALIDATION_ERROR){
        res.json({
            title: 'Validation Failed', 
            status: statusCode, 
            message: err.message, 
            location: err.stack
        })
    }
    else if(statusCode === constants.UNAUTHORIZED){
        res.json({
            title: 'Unauthorized', 
            status: statusCode, 
            message: err.message, 
            location: err.stack
        })
    }
    else if(statusCode === constants.FORBIDDEN){
        res.json({
            title: 'Forbidden', 
            status: statusCode, 
            message: err.message, 
            location: err.stack
        })
    }
    else if(statusCode === constants.NOT_FOUND){
        res.json({
            title: 'Not Found', 
            status: statusCode, 
            message: err.message, 
            location: err.stack
        })
    }
    else if(statusCode === constants.SERVER_ERROR){
        res.json({
            title: 'Server Error', 
            status: statusCode, 
            message: err.message, 
            location: err.stack
        })
    }
    else{
        console.log('all working fine, no error');
    }
}

// VALIDATION_ERROR: 400,
//     UNAUTHORIZED: 401,
//     FORBIDDEN: 403,
//     NOT_FOUND: 404

module.exports = errorHandler