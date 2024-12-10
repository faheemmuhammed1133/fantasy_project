import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-xl font-bold"
              >
                SportsBet Pro
              </motion.div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/matches" className="hover:text-indigo-300">Matches</Link>
                <Link to="/profile" className="hover:text-indigo-300">Profile</Link>
                <Link to="/wallet" className="hover:text-indigo-300">Wallet</Link>
                <button
                  onClick={logout}
                  className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;