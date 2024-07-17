'use server'

import { BASE_URL, TOKEN } from '@/app/utils/environment'
import axios, { AxiosError } from 'axios'

const satellite = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
})

satellite.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

satellite.interceptors.response.use(
  response => {
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default satellite
