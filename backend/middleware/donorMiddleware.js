const isDonor = (req, res, next) => {
  if (req.user.role == "isDonor") {
    next();
  } else {
    res.status(401).send({ msg: "not Authorized" });
  }
};
module.exports = isDonor;
