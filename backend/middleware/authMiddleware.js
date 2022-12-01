/*const jwt = require("jsonwebtoken");

const user = require("../models/userModel");
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from header
      token = req.header.authorization.split(" ")[1];
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get users from token
      req.User = await user.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      console.error(err.message);
      res.status(401).json({ msg: "Not authorized" });
    }
  }
  if (!token) {
    return res.status(401).json({ msg: "No token , authorization denied" });
  }
};

module.exports = protect;*/
