import { useEffect } from 'react';
import useUser from "../hooks/useUser";
import { useNavigate } from 'react-router-dom';

const useAdmin = (route) => {
    const user = useUser()
    const nav = useNavigate()

    const users = JSON.parse(localStorage.getItem('users'))

    useEffect(() => {
        if (user) {
            if (!users?.find(x => x.email === user.email)?.isAdmin)
                return nav(route);
        } else return nav('/login');
        
    }, [user]);

    return { user, users }

}

export default useAdmin