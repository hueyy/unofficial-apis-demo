import axios from 'axios'

const api = axios.create({
  baseURL: process.env.GATSBY_API_URL
})

const getSocieties = async () => {
  try {
    const { data } = await api.get(`/societies`)
    return data
  } catch (error) {
    throw error
  }
}

const getSocietyById = async (id) => {
  try {
    const { data } = await api.get(`/societies/${id}`)
    return data
  } catch (error) {
    throw error
  }
}

export default {
  getSocieties,
  getSocietyById
}
