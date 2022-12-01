const user = require("../models/userModel");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// container for user controller

const controller = {};
/**
 * @Route POST /api/user
 * @Access Private
 * @Desc  User register
 */

controller.createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    isAdmin,
    isDonor,
    isRecipient,
    bloodGroup,
    isAccepted,
    dueDate,
    phone,
    date,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  // check is user exist
  try {
    const userExists = await user.findOne({ email });
    if (userExists)
      return res.status(400).json({ errors: [{ message: "existing user" }] });

    // new user in data base
    /*User = new user({
      name,
      email,
      password,
      isAdmin,
      isDonor,
      isRecipient,
      bloodGroup,
      isAccepted,
      dueDate,
      phone,
      date,
    });*/

    // hash du password
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
    //create user
    const User = await user.create({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      isDonor,
      isRecipient,
      bloodGroup,
      isAccepted,
      dueDate,
      phone,
      date,
    });
    if (User) {
      res.status(201).json({
        _id: User._id,
        name: User.name,
        email: User.email,
        token: generateToken(User._id),
      });
    } else {
      res.status(400).json({ msg: "invalid user data" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error!...");
  }
};
/**
 *
 * @Route GET /api/user/:id
 * @Desc get users by id (user profile)
 * @Access private
 */
controller.getUser = async (req, res) => {
  id = req.params.id;
  try {
    const users = await user.findById(id);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
};
/**
 *
 * @Route GET /api/user
 * @Desc get all users
 * @Access private
 */
controller.getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
};
/**
 *
 * @Route PUT /api/user/:id
 * @Desc   update user
 * @Access Private
 */
controller.updateUser = async (req, res) => {
  id = req.params.id;
  const {
    name,
    email,
    password,
    isAdmin,
    isDonor,
    isRecipient,
    bloodGroup,
    isAccepted,
    dueDate,
    phone,
    date,
  } = req.body;

  // build a user field
  const userField = {};

  if (name) userField.name = name;
  if (email) userField.email = email;
  if (password) userField.password = password;
  if (isAdmin) userField.isAdmin = isAdmin;
  if (isDonor) userField.isDonor = isDonor;
  if (isRecipient) userField.isRecipient = isRecipient;
  if (bloodGroup) userField.bloodGroup = bloodGroup;
  if (isAccepted) userField.isAccepted = isAccepted;
  if (dueDate) userField.dueDate = dueDate;
  if (phone) userField.phone = phone;
  if (date) userField.date = date;

  try {
    let users = await user.findById(id);
    if (!users) return res.status(404).json({ msg: "user not found" });
    users = await user.findByIdAndUpdate(
      id,
      { $set: userField },
      { new: true }
    );
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
};

/**
 * @Route DELETE /api/user/:id
 * @Desc   Delete user
 * @Access Private
 */

controller.deleteUser = async (req, res) => {
  id = req.params.id;
  try {
    let users = await user.findById(id);
    if (!users) return res.status(404).json({ msg: "user not found" });
    await users.deleteOne({ _id: id });
    res.json({ msg: "user removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
};
//generate token
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

// export the module

module.exports = controller;
