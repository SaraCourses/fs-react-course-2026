import { setSession } from '../auth/auth.utils'
import { useAuthContext } from '../auth/useAuthContext';
import { login as loginService } from '../services/auth.service'

const LoginPage = () => {
    const { setUser } = useAuthContext();

    const login = async () => {
        const { user, token } = await loginService('b@gmail.com', 'b123456')
        setSession(token)
        setUser(user)
    }

    return <div>
        <button onClick={login}>Login</button>
    </div>
}

export default LoginPage
