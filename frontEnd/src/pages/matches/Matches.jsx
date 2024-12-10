import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Matches() {
  const [matches] = useState([
    {
      id: 1,
      team1: 'Mumbai Indians',
      team2: 'Chennai Super Kings',
      time: '7:30 PM',
      date: '2024-03-20',
      league: 'IPL',
    },
    {
      id: 2,
      team1: 'Royal Challengers',
      team2: 'Rajasthan Royals',
      time: '3:30 PM',
      date: '2024-03-21',
      league: 'IPL',
    },
    // Add more matches as needed
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Upcoming Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <motion.div
            key={match.id}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-indigo-400 font-semibold">{match.league}</span>
                <span className="text-gray-400">{match.date}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-white font-bold">{match.team1}</div>
                <div className="text-gray-400">vs</div>
                <div className="text-white font-bold">{match.team2}</div>
              </div>
              <div className="text-center text-gray-400 mb-4">{match.time}</div>
              <Link
                to={`/contests/${match.id}`}
                className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Join Contests
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Matches;