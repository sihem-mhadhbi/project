const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const user = require("../models/userModel");
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../controller/userController");

router.post(
  "/",
  [
    check("name", "required field! missing name...").notEmpty(),
    check("email", "required field, missing email...").isEmail(),
    check(
      "password",
      "required field , please enter a password with 6 or more character"
    )
      .notEmpty()
      .isLength({ min: 6 }),
  ],
  createUser
);
// get user
router.get("/:id", getUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
