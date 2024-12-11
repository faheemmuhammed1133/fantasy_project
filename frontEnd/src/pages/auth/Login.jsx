import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

function Login() {
  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();



  async function login() {
    try {
      let response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify(userCreds),
        headers: { "Content-Type": "application/json" }
      });

      let data = await response.json()

      if (response.status === 200 & data.token !== undefined) {
        localStorage.setItem("sayit-info", JSON.stringify(data))
        navigate("/chat")
        // console.log("hi")
      }
    }
    catch (err) {
      setError("User Not Found")
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   try {
  //     await login(formData);
  //     navigate('/matches');
  //   } catch (error) {
  //     setError('Invalid email or password');
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
          {/* <p className="mt-2 text-center text-sm text-gray-400">
            Demo Credentials:
            <br />
            Email: demo@example.com
            <br />
            Password: demo123
          </p> */}
        </div>
        <form className="mt-8 space-y-6" onSubmit={login}>
          {error && (
            <div className="text-red-500 text-center text-sm">{error}</div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={userCreds.email}
                onChange={(e) => setUserCreds({ ...userCreds, email: e.target.value })}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={userCreds.password}
                onChange={(e) => setUserCreds({ ...userCreds, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;