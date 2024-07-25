'use client'
import { useAuth } from '@/context/AuthContext'
import axios from 'axios'

const { state, dispatch } = useAuth()

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: state.token ?? ''
  }
})

export default api