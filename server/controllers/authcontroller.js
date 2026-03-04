import User from "../db/user.js";
import jwt from "jsonwebtoken";
export const JWT_SECRET = "dfbgygfrwhshfbwehbdfbwf";
export const login = async (req, res) => {
  const { email, password } = req.body;
  let token = "";
  const user = await User.findOne({ email });
  
  if (!user) {
   
    return res.status(400).json({
      message: "invalid user",
      
    });
    
  }
  if(password !== user.password ){
   
    return res.status(400).json({
      message:"invalid password"
    })
  }
  if (email == user.email && password == user.password) {
    token = await jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: "1h" },
    );
  }
  res.status(200).json({
    message: "Login Successful",
    token,
  });
 
};
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All Fields Required",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(200).json(user);
   
  } catch (err) {
    res.status(500).send("Server Down");
    console.error(err.message);
  }
};
