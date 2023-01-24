const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require("../../models/user");

module.exports = {
  create,
  login,
  checkToken
};

// helper function
function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    // Look into our DB and see if we have a user with incoming email
    const user = await User.findOne({email: req.body.email})
    if (!user) throw new Error('No matching User')
    
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error('Bad password')
    
    const token = createJWT(user);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
  console.log('req.user', req.user)
  res.status(200).json(req.exp)
}