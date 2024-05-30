const User = require('../models/User');

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  findByEmail,
};

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Get a single user by ID
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Update a single user by ID
async function updateUser(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Delte a single user by ID
async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the User',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

async function findByEmail(req, res) {
  try {
    const foundUser = await User.findOne({ email: req.params.email });

    res.status(200).json(foundUser);
  } catch (err) {
    res.status(400).send(err);
  }
}