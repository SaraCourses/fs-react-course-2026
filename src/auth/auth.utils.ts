import { Paths } from "../routes/paths";
import axios from "../services/axios";

export const setSession = (token: string) => {
    localStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const getSession = () => {
    return localStorage.getItem('token');
}

export const removeSession = () => {
    localStorage.removeItem('token');
    window.location.href = `/${Paths.login}`
}

