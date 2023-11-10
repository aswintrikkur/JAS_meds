const genericError = (error,req,res,next) => {

    let status = error.status || 400 ;

    if(error.message=='jwt expired'){
     status =  401;
    }

    res.status(status).json({
        message: error.message
    })

}


module.exports = { genericError }