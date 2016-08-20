const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

export default function createRoutes (store) {
  return [
    {
      path: '/',
      name: 'home',
      getComponent (nextState, cb) {
        System.import('Containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }
  ]
}
