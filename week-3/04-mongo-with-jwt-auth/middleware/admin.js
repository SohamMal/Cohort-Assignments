// Middleware for handling auth
const jwt=require('jsonwebtoken');

const { secret }=require('../sceret/config');

function adminMiddleware(req, res, next) {
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
                msg:"Verification error1"
            })
        }
    }catch(e){
        res.json({
            e
        })
    }
}

module.exports = adminMiddleware;