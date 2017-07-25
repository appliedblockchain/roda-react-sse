export const asc = (data, key) => {
  const result = data.sort(function(a, b) {
    const valueA = a[key]
    const valueB = b[key]
    if (typeof valueA === 'string') {
      return valueA.toLowerCase() > valueB.toLowerCase()
    }
    return valueA - valueB
  })

  return result
}

export const desc = (data, key) => {
  const result = data.sort(function(a, b) {
    const valueA = a[key]
    const valueB = b[key]
    if (typeof valueA === 'string') {
      return valueA.toLowerCase() < valueB.toLowerCase()
    }
    return valueB - valueA
  })

  return result
}
