import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Redirection() {
    const navigate = useNavigate()
    const role = localStorage.getItem('role');
    const login = localStorage.getItem('login');
    useEffect(() => {
        if (!login) {
            navigate('/login');
        } else if (role === 'teacher') {
            navigate('/teacher');
        } else if (role === 'student') {
            navigate('/student');
        }
    }, [login, role, navigate]);
  return null;
}

export default Redirection
