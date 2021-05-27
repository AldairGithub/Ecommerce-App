import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import api from './api-helper'

export const readAllItems = async () => {
  const response = await api.get('/items')
  return response.data
}

export const readOneItem = async (id) => {
  const response = await api.get(`/items/${id}/categories`)
  return response.data
}

export const addCategory = async (categoryId, itemId) => {
  const response = await api.put(`/categories/${categoryId}/item/${itemId}`)
  return response.data
}

export const postItem = async (itemData) => {
  const response = await api.post('/items', { item: itemData })
  return response.data
}

export const putItem = async (id, itemData) => {
  const response = await api.put(`/items/${id}`, { item: itemData })
  return response.data
}

export const destroyItem = async (id) => {
  const response = await api.delete(`/items/${id}`)
  return response
}

export const getSupplierItems = async (supplier_id) => {
  const response = await api.get(`/items/${supplier_id}/supplier_items`)
  return response.data
}
export const getCategoryItems = async (category_id) => {
  const response = await api.get(`/items/${category_id}/categories_items`)
  return response.data
}