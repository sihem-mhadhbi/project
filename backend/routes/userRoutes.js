const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
  loginUser,
  getMe,
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
router.get("/me", protect, getMe);
router.post("/register", createUser);
router.get("/:id", getUser);
router.get("/", protect, getUsers);
router.put("/:id", updateUser);
router.delete("/:id", protect, deleteUser);
router.post("/login", loginUser);

module.exports = router;
