const { NewPoem, SourceText, User } = require('../models')

const CreatePoem = async (req, res) => {
  try {
    const poem = await NewPoem.create({ ...req.body })
    res.send(poem)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = { CreatePoem }
