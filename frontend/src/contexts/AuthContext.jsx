import { createContext, useState, useContext } from 'react';

// Replace this with the actual API URL
const API_URL = 'http://localhost:8000/api/users';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function to interact with the backend
  const login = async (credentials) => {
    try {
      // Make the API request to the backend
      const response = await fetch(API_URL+"/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      // Get the user data from the response
      const data = await response.json();

      // Set the user data in state
      setUser(data.user);  // Assuming the user data is returned in the 'user' field
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const register = async (userData) => {
    try {
      // Make the API request to the backend for registration
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      // Get the registered user data from the response
      const data = await response.json();

      // Set the user data in state
      setUser(data);
      console.log(data)
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
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
