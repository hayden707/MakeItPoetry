import Client from './api'

export const CreatePoem = async data => {
  const res = await Client.post('/poems', data)
  return res.data
}

export const GetPoems = async () => {
  const res = await Client.get('/poems')
  return res.data
}

export const UpdatePoem = async (id, data) => {
  const res = await Client.put(`/poems/${id}`, data)
  return res
}

export const DeletePoem = async id => {
  const res = await Client.delete(`/poems/${id}`)
  return res.data
}
