import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = async (inputs) => {
        const response = await axios.post('http://localhost:5000/api/auth/login', inputs);
        setCurrentUser(response.data);
    }

    const logout = async () => {
        const response = await axios.post('http://localhost:5000/api/auth/logout');
        console.log(response);
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}