import Client from './api'

export const CreatePoem = async data => {
  const res = await Client.post('/poems', data)
  return res.data
}

export const GetPoems = async () => {
  const res = await Client.get('/poems')
  return res.data
}
