import { NavLink, Outlet } from "react-router"
import { removeSession } from "../auth/auth.utils"

const Layout = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="products">Products</NavLink>
            </nav>
            <button onClick={() => removeSession()}>Logout</button>
        </header>
        <main><Outlet /></main>
        <footer></footer>
    </>
}
export default Layout