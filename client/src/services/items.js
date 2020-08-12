import api from './api-helper'

export const readAllItems = async () => {
  const response = await api.get('/items')
  return response.data
}

// export const readOneItem = async (id) => {
//   const response = await api.get(`/items/${id}`)
//   return response.data
// }

export const readOneItem = async (id) => {
  const response = await api.get(`/items/${id}/categories`)
  return response.data
}