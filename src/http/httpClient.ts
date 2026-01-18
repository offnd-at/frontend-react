import axios from 'axios'

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'X-Offnd-Api-Key': import.meta.env.VITE_APP_API_KEY
  }
})
