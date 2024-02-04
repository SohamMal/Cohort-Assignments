const { Router } = require("express");
const { Admin, Course } = require("../db");
const { secret } = require('../sceret/config');
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const value = await Admin.findOne({
        username:username
    })
    if(value){
        res.status(409).json({
            msg:"User already exists"
        })
    }else{
        await Admin.create({
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

    const value= await Admin.findOne({
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink;

    Course.findOne({
        title:title
    }).then(function(value){
        if(value){
            res.status(400).json({
                msg:"Course Already Exists"
            })
        }else{
            Course.create({
                title:title,
                description:description,
                imageLink:imageLink,
                price:price
            }).then(function(newCourse){
                res.json({
                    message: 'Course created successfully',
                    course_id:newCourse._id
                })
            })
        }
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const Courses=await Course.find({});

    res.json({
        Courses
    })
});

module.exports = router;