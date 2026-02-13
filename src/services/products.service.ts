import type { Product } from "../types/product.types"
import axios from "./axios"

const url = 'products'

export const getProducts = async () => {
    const response = await axios.get(url)
    const products = await response.data
    return products
}

export const deleteTodo = async (id: number) => {
    const response = await axios.delete(`${url}/${id}`)
    return response.data
}

export const addTodo = async (todo: Omit<Product, 'id'>) => {
    const response = await axios.post(url, todo)
    const newTodo = response.data
    return newTodo
}