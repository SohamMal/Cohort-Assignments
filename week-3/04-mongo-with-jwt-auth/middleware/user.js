const jwt=require('jsonwebtoken');

const { secret }=require('../sceret/config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;

    // it'll like Bearer ausdhajsdhjsa so..

    const tokenArr=token.split(" ");

    const jwtToken= tokenArr[1];

    try{
        const verifiedValue=jwt.verify(jwtToken, secret);
        req.username=verifiedValue.username;
        if(verifiedValue.username){
            next();
        }
        else{
            res.json({
                msg:"Verification error"
            })
        }
    }catch(e){
        res.json({
            msg:"Verification error"
        })
    }
}

module.exports = userMiddleware;