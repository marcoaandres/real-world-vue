/**
 * modularizamos nuestra peticion a una capa de servicio
 */

/**importacion de axios */
import axios from 'axios'

/*nueva instancia de axios */
const apiClient = axios.create({
  /**configuracion a usar cuando nos conectemos a url */
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

/**una ves configurado
 * podemos exportar el metodo para que obtenga los eventos
 * utilizando nuestra variable
 */

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
