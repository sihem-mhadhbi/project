const isRecipient = (req, res, next) => {
  if (req.user.role == "isRecipient") {
    next();
  } else {
    res.status(401).send({ msg: "not Authorized" });
  }
};
module.exports = isRecipient;
