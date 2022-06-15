import React, { useState } from 'react';
import { TryLogin } from './AuthService';
import { useNavigate } from 'react-router-dom';


const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {

    
      await TryLogin(username, password).then(a => {
        if (a.status === 200) {
            setToken(true);
            navigate("/practice");
        } else {
            alert('Incorect username or password')
        }
    })
  };

  const handleLogout = () => {

    localStorage.removeItem('token');
    setToken(false);
    navigate('/');

  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};