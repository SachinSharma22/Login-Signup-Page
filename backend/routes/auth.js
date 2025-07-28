import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/signup", async(req,res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({message:"all fields required."})
    }
    const userExist =await User.findOne({email});
    if(userExist){
        return res.status(400).json({message:"User already exist."})
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser =new User({name,email,password:hashedPassword});
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
});


// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'All fields required' });

  const user = await User.findOne({ email });

  if (!user)
    return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password,user.password)

  if (!isMatch)
    return res.status(401).json({ message: 'Incorrect password' });

  res.status(200).json({ message: 'Login successful' });
});

export default router;