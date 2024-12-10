import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-8">Welcome to SportsBet Pro</h1>
          <p className="text-xl text-gray-300 mb-12">Join the ultimate sports betting experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Multiple Sports</h3>
              <p className="text-gray-400">Cricket, Football, Basketball and more</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Mega Contests</h3>
              <p className="text-gray-400">Win big with our mega prize pools</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
              <p className="text-gray-400">Safe and secure betting experience</p>
            </motion.div>
          </div>
          
          <Link
            to="/register"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;