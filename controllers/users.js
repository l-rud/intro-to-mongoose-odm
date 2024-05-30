const User = require('../models/User');

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  findByEmail,
  addSkills,
  findUsersOver21,
};

async function createUser(req, res) {
  try {
    // Using the helper function (create)
    // const user = await User.create(req.body);

    const user = new User(req.body);

    await user.save();

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

async function findUsersOver21(req, res) {
  try {
    const users = await User.findOver21();

    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Get a single user by ID
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);

    user.logUserInfo();

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

// Add a skill to the skills array
async function addSkills(req, res) {
  try {
    // The skills we will add will be in the req.body
    // Using the model to find the user by Id
    const foundUser = await User.findById(req.params.id);

    const concatedArray = foundUser.skills.concat(req.body.skills);

    foundUser.skills = concatedArray;

    await foundUser.save();

    res.send(foundUser);
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