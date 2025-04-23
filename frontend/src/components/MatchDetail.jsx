import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './MatchDetail.module.css';

const MatchDetail = () => {
  const { id } = useParams(); // Destructure directly for clarity
  const [match, setMatch] = useState(null);
  const matchPlayers = useRef([]);

  useEffect(() => {
    const getMatchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/matches/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setMatch(result);
      } catch (err) {
        console.log(err.message);
      }
    }

    getMatchDetails();
  }, [id]);

  useEffect(() => {
    const getPlayers = async () => {
      if (!match || !match.playersA) return;

      for (let i = 0; i < match.playersA.length; i++) {
        try {
          const playerId = match.playersA[i];
          const response = await fetch(`http://localhost:8000/api/players/${playerId}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const result = await response.json();
          matchPlayers.current.push(result);
        } catch (err) {
          console.log(err.message);
        }
      }
    };

    getPlayers();
  }, [match]);

  if (!match) return <div>loading matches</div>;

  return (
    <div className={styles.matchDetailContainer}>
      <h2>Match Details</h2>
      <div className={styles.matchHeader}>
        <div className={styles.teamLogo}>
          <i className="fa-solid fa-flag" style={{ marginTop: "15px" }}></i>
        </div>
        <h3 className={styles.matchTitle}>
          {match.teamA} vs {match.teamB}
        </h3>
        <div className={styles.teamLogo}>
          <i className="fa-regular fa-flag" style={{ marginTop: "15px" }}></i>
        </div>
      </div>

      <div className={styles.matchInfo}>
        <p className={styles.score}><strong>Score:</strong> {match.scoreA} - {match.scoreB}</p>
        <p className={styles.date}><strong>Date:</strong> {new Date(match.date).toLocaleString()}</p>
        <p className={styles.status}><strong>Status:</strong> {match.status}</p>
      </div>

      <div className={styles.players}>
        <div>
          <h4>{match.teamA} Players</h4>
          <ul>
            {matchPlayers.current.map((player, index) => (
              <li key={index}>{player.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{match.teamB} Players</h4>
          <ul>
            {match.playersB && match.playersB.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MatchDetail;
