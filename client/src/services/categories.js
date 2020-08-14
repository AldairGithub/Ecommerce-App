import api from './api-helper'

export const readAllCategories = async () => {
  const response = await api.get('/categories')
  return response.data
}