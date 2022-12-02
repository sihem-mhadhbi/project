const isAdmin = (req, res, next) => {
  if (req.user.role == "isAdmin") {
    isDonor;
    next();
  } else {
    res.status(401).send({ msg: "not Authorized" });
  }
};
module.exports = isAdmin;
