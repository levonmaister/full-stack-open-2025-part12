import axios from 'axios'

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL



const apiClient = axios.create({
  baseURL: VITE_BACKEND_URL,
})
 
export default apiClient
