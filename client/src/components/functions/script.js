export const filter = (i, j) => {
  const arr = i.filter(ele => {
    return ele.name.toLowerCase().includes(j)
  })
  return arr
}

export const filterByCategories = (i, j) => {
  const arr = i.filter(ele => {
    return ele.categories.some(k => {
      return k.name.toLowerCase() === j.toLowerCase()
    })
  })
  return arr
}