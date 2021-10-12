import Client from './api'

export const CreateText = async data => {
  const res = await Client.post('/texts', data)
  return res.data
  console.log('TEXT CREATED')
}
