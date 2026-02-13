import axios from "./axios"
import { type User } from '../types/user.types'
const url = 'users'

export const login = async (email: string, password: string) => {
    const response = await axios.post(url + '/login', { email, password })
    return response.data
}

type RegisterType = Omit<User, 'id'> & { password: string }

export const register = async (data: RegisterType) => {
    const response = await axios.post(url, data)
    return response.data
}
