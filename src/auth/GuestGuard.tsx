import type { ReactNode } from "react"
import { useAuthContext } from "./useAuthContext"
import { Navigate } from "react-router"
import { Paths } from "../routes/paths"

type Props = {
    children: ReactNode;
}

const GuestGuard = ({ children }: Props) => {
    const { isAuthorized, isInitialized } = useAuthContext();

    if (!isInitialized) {
        return <h1>Loading...</h1>
    }

    if (isAuthorized) {
        return <Navigate to={`/${Paths.home}`} />
    }

    return <>{children}</>
}

export default GuestGuard