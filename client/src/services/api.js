import axios from 'axios'

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}`
    : 'http://localhost:3000/api'

const Client = axios.create({ baseURL: BASE_URL })
export default Client
