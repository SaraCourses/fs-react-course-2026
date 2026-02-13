import type { ReactNode } from "react"
import { useAuthContext } from "./useAuthContext"
import { Navigate } from "react-router"
import { Paths } from "../routes/paths"
import type { Role } from "../types/user.types"

type Props = {
    children: ReactNode;
    roles?: Role[]
}

const AuthGuard = ({ children, roles }: Props) => {
    const { isAuthorized, isInitialized, user } = useAuthContext();

    if (!isInitialized) {
        return <h1>Loading...</h1>
    }

    if (!isAuthorized || !user) {
        return <Navigate to={`/${Paths.login}`} />
    }

    if (roles?.length && !roles.includes(user.role)) {
        return <h1>Unauthorized</h1>
    }

    return <>{children}</>
}

export default AuthGuard