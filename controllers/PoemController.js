const { NewPoem, SourceText, User } = require('../models')

const CreatePoem = async (req, res) => {
  try {
    const poem = await NewPoem.create({ ...req.body })
    res.send(poem)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetPoems = async (req, res) => {
  try {
    const poems = await NewPoem.findAll()
    res.send(poems)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = { CreatePoem, GetPoems }
