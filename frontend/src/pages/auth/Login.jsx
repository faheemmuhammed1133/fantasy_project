import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import './Login.css';

function Login() {
  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(userCreds);
      navigate('/');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="logincontainer">
        <h2 className="title">Sign in to your account</h2>
        <form className="form" onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}
          <div className="input-group">
            <input
              type="email"
              required
              className="input-field"
              placeholder="Email address"
              value={userCreds.email}
              onChange={(e) => setUserCreds({ ...userCreds, email: e.target.value })}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              required
              className="input-field"
              placeholder="Password"
              value={userCreds.password}
              onChange={(e) => setUserCreds({ ...userCreds, password: e.target.value })}
            />
          </div>
          <button type="submit" className="button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
