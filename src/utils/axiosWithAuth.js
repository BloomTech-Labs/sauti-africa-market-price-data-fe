import axios from 'axios'
// import { promisify } from 'util'

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
      if (found) return await found
      try {
        const response = axios.get(path, {
          ...params,
          headers: { Authorization: `Bearer ${token}` }
        })
        cache.set(path, response)
        return response
      } catch (error) {
        return new Error(error)
      }
    },
    post: function() {}
  }
}
