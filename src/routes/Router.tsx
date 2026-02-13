import { RouterProvider, createBrowserRouter } from "react-router"
import { Paths } from "./paths"
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Layout from "../layouts/Layout"
import AuthGuard from "../auth/AuthGuard"
import { Role } from "../types/user.types"
import GuestGuard from "../auth/GuestGuard"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: Paths.home,
                    element: <HomePage />
                },
                {
                    path: Paths.products,
                    element: <AuthGuard roles={[Role.Admin]}><ProductsPage /></AuthGuard>
                },
                // {
                //     path: 'product/:id',
                //     element: <ProductPage />
                // },
            ]
        },
        {
            path: Paths.login,
            element: <GuestGuard><LoginPage /></GuestGuard>,
        },
        {
            path: Paths.register,
            element: <GuestGuard><RegisterPage /></GuestGuard>,
        },
        {
            path: '*',
            element: <h1>404 Page not found</h1>
        },
    ])

    return <RouterProvider router={router} />
}

export default Router