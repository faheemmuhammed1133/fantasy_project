import { useState } from 'react';
import { motion } from 'framer-motion';

function Wallet() {
  const [balance, setBalance] = useState(1000);
  const [transactions] = useState([
    {
      id: 1,
      type: 'deposit',
      amount: 500,
      date: '2024-03-15',
      status: 'completed',
    },
    {
      id: 2,
      type: 'contest_join',
      amount: -100,
      date: '2024-03-14',
      status: 'completed',
    },
    // Add more transactions
  ]);

  const handleAddMoney = (amount) => {
    // TODO: Integrate payment gateway
    setBalance(balance + amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Wallet Balance</h2>
          <div className="text-4xl font-bold text-green-400 mb-6">
            ₹{balance.toFixed(2)}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[500, 1000, 2000].map((amount) => (
              <button
                key={amount}
                onClick={() => handleAddMoney(amount)}
                className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Add ₹{amount}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Transaction History</h3>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center p-4 bg-gray-700 rounded-lg"
              >
                <div>
                  <div className="text-white font-semibold">
                    {transaction.type === 'deposit' ? 'Added Money' : 'Contest Join'}
                  </div>
                  <div className="text-sm text-gray-400">{transaction.date}</div>
                </div>
                <div className={`font-semibold ${
                  transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;