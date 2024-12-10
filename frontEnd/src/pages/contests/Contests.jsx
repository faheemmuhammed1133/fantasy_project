import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Contests() {
  const { matchId } = useParams();
  const [contests] = useState([
    {
      id: 1,
      name: 'Mega Contest',
      entryFee: 499,
      prizePool: '10,00,000',
      totalSpots: 10000,
      filledSpots: 5463,
    },
    {
      id: 2,
      name: 'Winner Takes All',
      entryFee: 99,
      prizePool: '50,000',
      totalSpots: 500,
      filledSpots: 234,
    },
    // Add more contests as needed
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Available Contests</h1>
      <div className="space-y-6">
        {contests.map((contest) => (
          <motion.div
            key={contest.id}
            whileHover={{ scale: 1.01 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{contest.name}</h3>
                <span className="text-green-400">₹{contest.entryFee}</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Prize Pool</span>
                  <span className="text-green-400">₹{contest.prizePool}</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${(contest.filledSpots / contest.totalSpots) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{contest.filledSpots} spots filled</span>
                  <span>{contest.totalSpots - contest.filledSpots} spots left</span>
                </div>
                
                <Link
                  to={`/player-selection/${contest.id}?matchId=${matchId}`}
                  className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 mt-4"
                >
                  Join Contest
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Contests;