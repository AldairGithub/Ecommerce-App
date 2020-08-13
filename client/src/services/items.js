import api from './api-helper'

export const readAllItems = async () => {
  const response = await api.get('/items')
  return response.data
}

export const readOneItem = async (id) => {
  const response = await api.get(`/items/${id}/categories`)
  return response.data
}

export const postItem = async (itemData) => {
  const response = await api.post('/items', { item: itemData })
  return response.data
}