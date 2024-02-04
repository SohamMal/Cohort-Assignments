const { Router } = require("express");
const { User, Course} = require("../db");
const { secret } = require('../sceret/config');
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    const value = await User.findOne({
        username:username
    })
    if(value){
        res.status(409).json({
            msg:"User already exists"
        })
    }else{
        await User.create({
            username:username,
            password:password
        })
        res.json({
            msg:"Admin Successfully Added!"
        })
    }
});

router.post('/signin', async (req, res) => {
    const username=req.body.username;
    const password=req.body.password;

    const value= await User.findOne({
        username:username,
        password:password
    })
    if(value){
        const token=jwt.sign({
            username
        }, secret);
        res.json({
            token
        })
    }else{
        res.status(403).json({
            msg:"User not found"
        })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;

    const username=req.username;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username=req.username;//here the user name is coming from JWT so....have to make changes

    const user=await User.findOne({
        username:username
    })

    const courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses:courses
    })
});

module.exports = router