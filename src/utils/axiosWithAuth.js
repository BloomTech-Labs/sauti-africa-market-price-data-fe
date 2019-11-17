import axios from 'axios'

let cache = {
  maxEntries: 20,
  cacheData: new Map(),
  get: function(key) {
    const hasKey = this.cacheData.has(key)
    let value
    if (hasKey) {
      value = this.cacheData.get(key)
      this.cacheData.delete(key)
      this.cacheData.set(key, value)
    }
    return value
  },
  set: function(key, value) {
    if (this.cacheData.size >= this.maxEntries) {
      // least-recently used cache eviction strategy
      const keyToDelete = this.cacheData.keys().next().value
      this.cacheData.delete(keyToDelete)
    }
    this.cacheData.set(key, value)
  }
}

export const axiosWithAuth = token => {
  return {
    get: async function(path, params) {
      const found = cache.get(path)
      if (found) return found
      try {
        const response = await axios.get(path, {
          ...params,
          headers: { Authorization: `Bearer ${token}` }
        })
        cache.set(path, response)
        return response
      } catch (error) {
        return new Error(error)
      }
    },
    post: function(path, params) {
      return axios.post(path, {
        ...params,
        headers: { Authorization: `Bearer ${token}` }
      })
    }
  }
}
