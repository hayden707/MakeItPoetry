const { User } = require('../models')

const CreateUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = { CreateUser, GetUsers }
