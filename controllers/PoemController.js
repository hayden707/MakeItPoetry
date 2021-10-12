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

const GetPoemsByUser = async (req, res) => {
  try {
    const id = req.params.user_id
    const poem = await NewPoem.findAll({
      include: [{ model: User }],
      where: { user_id: id }
    })
    res.send(poem)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const UpdatePoem = async (req, res) => {
  try {
    const poem = await NewPoem.update(
      { ...req.body },
      { where: { id: req.params.poem_id }, returning: true }
    )
    res.send(poem)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const DeletePoem = async (req, res) => {
  try {
    await NewPoem.destroy({ where: { id: req.params.poem_id } })
    res.send({ msg: 'Poem deleted', payload: req.params.poem_id, status: 'Ok' })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = {
  CreatePoem,
  GetPoems,
  GetPoemsByUser,
  UpdatePoem,
  DeletePoem
}
