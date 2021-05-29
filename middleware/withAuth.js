const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const {User} = require("../models");
dotenv.config();
const withAuth = async (req, res, next) => {
    try {
        if(!req.cookies.visualiserToken) return res.status(401).json({msg:"No Token"});
        const token= req.cookies.visualiserToken; // visualiserToken cookie is a name for this application which is set on cookies during login
        const verifyToken = jwt.verify(token, process.env.SECRECT_KEY);
        const rootUser = await User.findOne({_id:verifyToken.id},{"tokens.token":token});
        if(!rootUser) {throw new Error("user not found")}
        req.token = token;
        req.name = rootUser;
        req.userID = rootUser._id;
        next();
    } catch (error) {
        res.status(401).json(error);
    }
}

module.exports = withAuth;