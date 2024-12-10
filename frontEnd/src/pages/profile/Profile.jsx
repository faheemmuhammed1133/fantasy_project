import { useState } from 'react';
import { motion } from 'framer-motion';

function Profile() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: '2024-01-15',
    totalContests: 45,
    contestsWon: 12,
  });

  const [biddingHistory] = useState([
    {
      id: 1,
      matchName: 'MI vs CSK',
      contestName: 'Mega Contest',
      date: '2024-03-15',
      amount: 499,
      rank: 234,
      winnings: 1000,
    },
    // Add more history items
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white font-bold">
                {user.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{user.name}</h2>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-gray-400">Contests Played</div>
              <div className="text-xl font-bold text-white">{user.totalContests}</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-gray-400">Contests Won</div>
              <div className="text-xl font-bold text-green-400">{user.contestsWon}</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-gray-400">Win Rate</div>
              <div className="text-xl font-bold text-white">
                {((user.contestsWon / user.totalContests) * 100).toFixed(1)}%
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-gray-400">Member Since</div>
              <div className="text-xl font-bold text-white">{user.joinedDate}</div>
            </div>
          </div>
        </motion.div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Bidding History</h3>
          <div className="space-y-4">
            {biddingHistory.map((bid) => (
              <motion.div
                key={bid.id}
                whileHover={{ scale: 1.01 }}
                className="bg-gray-700 p-4 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="text-white font-semibold">{bid.matchName}</div>
                  <div className="text-sm text-gray-400">{bid.date}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-400">{bid.contestName}</div>
                    <div className="text-sm text-gray-400">Rank: #{bid.rank}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-400">-₹{bid.amount}</div>
                    {bid.winnings > 0 && (
                      <div className="text-green-400">+₹{bid.winnings}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;