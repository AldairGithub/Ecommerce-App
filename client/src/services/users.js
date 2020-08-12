import api from './api-helper'

export const updateUser = async (id, userData) => {
  const response = await api.put(`/users/${id}`, { user: userData })
  return response.data
}