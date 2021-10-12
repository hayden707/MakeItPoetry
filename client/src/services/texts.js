import Client from './api'

export const CreateComment = async data => {
  const res = await Client.post('/texts', data)
  return res.data
}
