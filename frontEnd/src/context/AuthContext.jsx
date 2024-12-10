import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

// Demo credentials
const DEMO_USER = {
  email: 'demo@example.com',
  password: 'demo123',
  name: 'Demo User',
  joinedDate: '2024-01-15',
  totalContests: 45,
  contestsWon: 12,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    // Demo authentication
    if (credentials.email === DEMO_USER.email && credentials.password === DEMO_USER.password) {
      setUser(DEMO_USER);
      return true;
    }
    throw new Error('Invalid credentials');
  };

  const register = async (userData) => {
    // For demo, we'll just log in the user
    setUser({
      ...DEMO_USER,
      name: userData.name,
      email: userData.email,
    });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);