import { setSession } from '../auth/auth.utils';
import { useAuthContext } from '../auth/useAuthContext'
import { register as registerService } from '../services/auth.service'
import { Role } from '../types/user.types'


const RegisterPage = () => {
    const { setUser } = useAuthContext();

    const register = async () => {
        const { user, token } = await registerService({ email: 'b@gmail.com', password: 'b123456', name: 'user-b', role: Role.User })
        setSession(token)
        setUser(user)
    }

    return <div>
        <button onClick={register}>Register</button>
    </div>

}

export default RegisterPage
