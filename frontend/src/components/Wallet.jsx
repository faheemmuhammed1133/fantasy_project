import React, { useEffect, useState } from 'react';
import './Wallet.css';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function Wallet() {
  const { user } =useAuth();
  
  const navigate = useNavigate()

    function login(){
      navigate("/login")
    }

  // console.log(user.balance)
  if (!user) {
    
    return (<div style={{margin:"200px 450px"}}><h2 style={{color:"white"}}>You are not logged in. </h2> <button style={{padding:"10px",margin:"10px 80px"}} onClick={login}>Login</button></div>);
}

const [balance, setBalance] = useState(user.balance);

  useEffect(()=>{
    user.balance=balance
    const userData = fetch(`http://localhost:8000/api/users/${user._id}`,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({user}),
  }).then((data)=>{
    return data
  }).catch((err)=>{
    console.log(err)
  })
  
}
  ,[balance])
  
  const [addAmount, setAddAmount] = useState('');
  const [subAmount, setSubamount] = useState('');

  const handleAddMoney = (amount) => {
    if (amount > 0) {
      setBalance(balance + amount);
    }
  };
  const handleSubMoney = (amount) => {
    if (amount > 0) {
      if(amount>balance){
        setBalance(balance - amount);
      }else{
        alert("Withdrawal amount is greater than balance")
      }
    }
  };

  useEffect(()=>{
    
  })


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
            value={addAmount}
            onChange={(e) => setAddAmount(e.target.value)}
          />
          <button style={{height: "40px"}}
            onClick={() => {
              handleAddMoney(Number(addAmount));
              setAddAmount(''); // Clear input after adding money
            }}
            className="button"
          >
            Add Amount
          </button>
          </div>
          <div className="input-container">
            <input
              type="number"
              min="1"
              className="custom-amount-input"
              placeholder="Enter amount"
              value={subAmount}
              onChange={(e) => setSubamount(e.target.value)}
            />
          <button 
            onClick={() => {
              handleSubMoney(Number(subAmount));
              setSubamount(''); 
            }}
            className="button" style={{background:"red",height: "40px"}}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="transaction-history">
        <h3>Transaction History</h3>
        <div>
          {user.transactions.map((transaction) => (
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
