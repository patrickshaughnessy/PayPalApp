import apisauce from 'apisauce'

const create = (baseURL = '/') => {
  const api = apisauce.create({baseURL})

  const getLocales = (property) => api.get(`api/misc/delimiters?property=${property}`)

  return {
    getLocales
  }
}

export default {
  create
}
