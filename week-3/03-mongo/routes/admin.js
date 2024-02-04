const { Router } = require("express");
const { Admin }=require('../db');
const { Course }=require('../db');
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    Admin.findOne({
        username:username,
        password:password
    }).then(function(value){
        if(value){
            res.status(400).json({
                msg:"Admin Already Exists"
            })
        }else{
            Admin.create({
                username:username,
                password:password
            }).then(function(){
                res.json({
                    message: 'Admin created successfully'
                })  
            })
        }
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
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
    const courses=await Course.find({});
    res.json({
        courses
    })
});

module.exports = router;