const router = require("express").Router();
const User = require("../models/userMod");
const bcrypt = require("bcrypt");

//register new user
router.post("/register",async(req,res)=>{
    console.log(req.body)
    try {
        //generate hash of pass
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.pass,salt);
        //create a new user
        const newUser = await new User({
            username:req.body.name,
            email:req.body.email,
            password:hashed
        })

        //Save user to DB
        const user = await newUser.save();
        res.status(200).send("DONE VRO!!");
    }
    catch(err){res.status(500).json(err);}
});

//login an existing user
router.post("/login",async(req,res)=>{
    try {
        console.log(req.body);
        //Retrive user from DB
        const user = await User.findOne({email:req.body.email});
        console.log(req.body.email+user);
        !user && res.status(404).json("Who is u");

        //Validate Auth
        const validPass = await bcrypt.compare(req.body.password,user.password);
        !validPass && res.status(400).json("Wrong Password");

        //Login
        res.status(200).json(user);
    } catch(err){res.status(500).json(err);}
});

module.exports = router;