const { SourceText, User } = require('../models')

const CreateText = async (req, res) => {
  try {
    const text = await SourceText.create({ ...req.body })
    res.send(text)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const GetTexts = async (req, res) => {
  try {
    const texts = await SourceText.findAll()
    res.send(texts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetTextsByUser = async (req, res) => {
  try {
    const id = req.params.user_id
    const text = await SourceText.findAll({
      include: [{ model: User }],
      where: { user_id: id }
    })
    res.send(text)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const UpdateText = async (req, res) => {
  try {
    const text = await SourceText.update(
      { ...req.body },
      { where: { id: req.params.source_id }, returning: true }
    )
    res.send(text)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

const DeleteText = async (req, res) => {
  try {
    await SourceText.destroy({ where: { id: req.params.source_id } })
    res.send({
      msg: 'Text deleted',
      payload: req.params.source_id,
      status: 'Ok'
    })
  } catch (error) {
    res.status(500).send({ error: error })
  }
}

module.exports = {
  CreateText,
  GetTexts,
  GetTextsByUser,
  UpdateText,
  DeleteText
}
