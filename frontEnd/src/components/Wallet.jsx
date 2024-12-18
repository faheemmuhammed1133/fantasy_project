import React, { useState } from 'react';
import './Wallet.css';

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
  ]);
  const [customAmount, setCustomAmount] = useState('');

  const handleAddMoney = (amount) => {
    if (amount > 0) {
      setBalance(balance + amount);
    }
  };

  return (
    <div className="container">
      <div className="wallet-balance">
        <h2>Wallet Balance</h2>
        <div className="balance-amount">₹{balance.toFixed(2)}</div>
        <div className="button-group">
          {[500, 1000, 2000].map((amount) => (
            <button
              key={amount}
              onClick={() => handleAddMoney(amount)}
              className="button"
            >
              Add ₹{amount}
            </button>
          ))}
        </div>
        <div className="input-container">
          <input
            type="number"
            min="1"
            className="custom-amount-input"
            placeholder="Enter amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
          <button
            onClick={() => {
              handleAddMoney(Number(customAmount));
              setCustomAmount(''); // Clear input after adding money
            }}
            className="button"
          >
            Add Amount
          </button>
        </div>
      </div>

      <div className="transaction-history">
        <h3>Transaction History</h3>
        <div>
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction">
              <div>
                <div className="type">
                  {transaction.type === 'deposit' ? 'Added Money' : 'Contest Join'}
                </div>
                <div className="date">{transaction.date}</div>
              </div>
              <div
                className={`amount ${
                  transaction.amount > 0 ? 'positive' : 'negative'
                }`}
              >
                {transaction.amount > 0 ? '+' : ''}
                ₹{transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wallet;
