import Client from './api'

export const CreateUser = async data => {
  const res = await Client.post('/users', data)
  return res.data
}
