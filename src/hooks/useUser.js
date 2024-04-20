import { AuthContext } from "../Components/AuthContext";
import { useNavigate } from 'react-router-dom';
import  { useEffect,useContext } from 'react';

const useUser = () => {
    const nav = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) return nav('/login');
    }, [user]);

    return user 

}

export default useUser