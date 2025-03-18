import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styles from './Profile.module.css';  // Import CSS module
import { useNavigate } from 'react-router-dom';

const fetchUserDataByEmail = async (email) => {
  try {
    const response = await fetch('http://localhost:8000/api/users/email', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userdata = await response.json();
    return userdata;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

function Profile() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate =useNavigate()

  useEffect(() => {
    if (user && user.email) {
      const fetchUserData = async () => {
        try {
          const data = await fetchUserDataByEmail(user.email);
          console.log(data)
          setUserData(data[0]);
        } catch (err) {
          setError(err.message);
        }
      };
      fetchUserData();
    }
  }, [user]);

  if (!user) {
      navigate("/login")
      return <p>You are not logged in. {
      }</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className={styles.profile}>  {/* Use className from CSS module */}
      <h1>Profile</h1>
      <div className={styles.userInfo}>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Date of Birth:</strong> {new Date(userData.dob).toLocaleDateString()}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Phone Number:</strong> {userData.number}</p>
        <p><strong>Favorite Team:</strong> {userData.favTeam }</p>
        <p><strong>Balance:</strong> ₹{userData.balance}</p>
        
        {/* Displaying favorite players if they exist */}
        <div>
          <strong>Favorite Players:</strong>
          <ul>
            {userData.favPlayers && userData.favPlayers.length > 0 ? (
              userData.favPlayers.map(player => (
                <li key={player._id}>{player.name}</li>
              ))
            ) :null }
          </ul>
        </div>

        {/* Displaying matches if they exist */}
        <div>
          <strong>Your Matches:</strong>
          <ul>
            {userData.mymatchesId && userData.mymatchesId.length > 0 ? (
              userData.mymatchesId.map(match => (
                <li key={match._id}>{match.name}</li>
              ))
            ) : null}
          </ul>
        </div>

        {/* Displaying transaction history if available */}
        <div className={styles.transactions}>
          <strong>Transactions:</strong>
          <ul>
            {userData.transactions && userData.transactions.length > 0 ? (
              userData.transactions.map(transaction => (
                <li key={transaction._id}>
                  {transaction.type} of ₹{transaction.amount} on {new Date(transaction.date).toLocaleDateString()}
                </li>
              ))
            ) : null}
          </ul>
        </div>
      </div>
      <button>Edit Profile</button>
    </div>
  );
}

export default Profile;
