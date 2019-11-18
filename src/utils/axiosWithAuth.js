import axios from 'axios'

let cache = {
  maxEntries: 20,
  cacheData: new Map(),
  superlist: null,
  get: function(key) {
    if (key.includes('superlist')) return this.superlist
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
    if (key.includes('superlist')) {
      this.superlist = value
    } else {
      if (this.cacheData.size >= this.maxEntries) {
        // LRU cache eviction
        const keyToDelete = this.cacheData.keys().next().value
        this.cacheData.delete(keyToDelete)
      }
      this.cacheData.set(key, value)
    }
  },
  del: function(key) {
    this.cacheData.delete(key)
  }
}

export const axiosWithAuth = (token, exclude) => {
  return {
    get: function(path, params) {
      const found = cache.get(path)
      if (found) return found
      try {
        const response = axios.get(path, {
          ...params,
          headers: { Authorization: `Bearer ${token}` },
          baseURL:
            process.env.NODE_ENV !== 'development'
              ? 'https://sauti-africa-market-master.herokuapp.com/'
              : 'http://localhost:8888/'
        })
        if (!exclude) cache.set(path, response)
        return response
      } catch (error) {
        cache.del(path)
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
