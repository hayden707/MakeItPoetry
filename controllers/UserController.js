const { User } = require('../models')

const CreateUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = CreateUser
