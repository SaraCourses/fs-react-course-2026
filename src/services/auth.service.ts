import axios from "./axios"
import { type User } from '../types/user.types'

const url = 'auth'

export const login = async (email: string, password: string) => {
    const response = await axios.post(url + '/login', { email, password })
    return response.data
}

type RegisterType = Omit<User, 'id'> & { password: string }

export const register = async (data: RegisterType) => {
    const response = await axios.post(url + '/register', data)
    return response.data
}

export const getUserByToken = async (token: string) => {
    const response = await axios.get(url+ '/getUserByToken', { headers: { Authorization: `Bearer ${token}` } })
    return response.data
}