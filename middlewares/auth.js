// auth ,isStudent,isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = () => {
  try {
    //extract json webtoken
    const token = req.body.token;
    if (!token) {
        return res.status(400).json({
            message: "token is required",                                                                           
        })
    }

    // verify token

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        
    }
  } catch (error) {}
};
