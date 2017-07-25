const c = console
import config from '../config/config'

const host = config.hostFull

const PricesEventSourceApi = {
  // onMessage() {
  //   const connection = _init()
  //   connection.on("message", (data) => {
  //     return Promise.resolve(data)
  //   })
  //   // TODO: Promise.fail if on("message") timeouts
  // }

  _init: () => {
    const eventSource = new EventSource(`${host}/example`)
    return eventSource
  },

  onMessage: (callback) => {
    const connection = PricesEventSourceApi._init()

    connection.addEventListener('message', (sseMessage) => {
      var data = sseMessage.data
      data = JSON.parse(data)
      callback(data)
    })

    connection.addEventListener('error', (err) => {
      c.log('server disconnected')
      connection.close()
    })
  }

}


const PricesES = PricesEventSourceApi
export default PricesES


// usage:
//
// PricesEventSourceApi.onMessage((data) => { c.log(data) })
