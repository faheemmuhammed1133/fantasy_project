import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"; // To get the match ID from URL
import styles from './MatchDetail.module.css'; // Import the CSS Module

const MatchDetail = () => {
  const  matchId  = useParams(); // Extract matchId from the URL
  // console.log(matchId)
  const [match, setMatch] = useState(null);
  const matchPlayers = useRef([]);

  useEffect(() => {
    // Fetch the match details using the matchId from the URL
    const getMatchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/matches/${matchId.id}`);
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
    

  },[matchId])
  
  if(!match) return <div>loading matches </div>
  
  const getPlayers = async () => {
    // if(match){
    //   matchPlayers.current.push("match.teamA")
    // }else {
    //   console.log(match)
    // }
  
    const players = match.playersA
    
    for (let i = 0  ;i<players.length ; i++) {
      try {
        let player = players[i]
        console.log(player)
        const response = await fetch(`http://localhost:8000/api/players/${player}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        console.log(result.name)
        matchPlayers.current.push(result)
      } catch (err) {
        console.log(err.message);
      }
      
    };}

    getPlayers();

if(!matchPlayers) return <div>loading players</div>
  return (
    <div className={styles.matchDetailContainer}>
      <h2>Match Details</h2>
      <div className={styles.matchHeader}>
        <div 
        //src={match.teamALogo} 
         className={styles.teamLogo} ><i className="fa-solid fa-flag" style={{marginTop:" 15px"}}></i></div>
        <h3 className={styles.matchTitle}>
          {match.teamA} vs {match.teamB}
        </h3>
        <div 
        //src={match.teamALogo} 
         className={styles.teamLogo} ><i className="fa-regular fa-flag" style={{marginTop:" 15px"}}></i></div>
      </div>

      <div className={styles.matchInfo}>
        <p className={styles.score}><strong>Score:</strong> {match.scoreA} - {match.scoreB}</p>
        <p className={styles.date}><strong>Date:</strong> {new Date(match.date).toLocaleString()}</p>
        {/* <p className={styles.matchInfo}><strong>Sport:</strong> {match.sport}</p> */}
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

} 
export default MatchDetail;
