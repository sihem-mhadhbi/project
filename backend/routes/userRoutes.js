const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
  loginUser,
  getMe,
} = require("../controller/userController");
const protect = require("../middleware/authMiddleware");

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
router.get("/:id", protect, getUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
