import Client from './api'

export const CreatePoem = async data => {
  const res = await Client.post('/poems', data)
  return res.data
}
