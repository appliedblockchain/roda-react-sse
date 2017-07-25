import environment from './env'

const defaultConfig = {
  host:  "localhost:3001",
  proto: "http",
}

const merge = (source, target) => {
  return Object.assign(target, source)
}

const config = {
  development: merge(defaultConfig, {

  }),
  test: merge(defaultConfig, {
    host:  "localhost:3001",
  }),
  // staging
  production: merge(defaultConfig, {
    host: "localhost",
    proto: "https",
  })
}


const currentConfig = config[environment]

currentConfig.hostFull = `${currentConfig.proto}://${currentConfig.host}`

export default currentConfig
