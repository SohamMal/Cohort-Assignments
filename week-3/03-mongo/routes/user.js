const { Router } = require("express");
const { User, Course}=require('../db');
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    User.findOne({
        username:username,
        password:password
    }).then(function(value){
        if(value){
            res.status(400).json({
                msg:"User Already Exists"
            })
        }else{
            User.create({
                username:username,
                password:password
            }).then(function(){
                res.json({
                    message: 'User created successfully'
                })
            })
        }
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courses=await Course.find({})
    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;

    const username=req.headers.username;

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

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;

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