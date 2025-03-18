import React from "react";
import { Link } from "react-router-dom";
import "./Matches.css";  // Import the updated CSS file

const LiveMatches = (props) => {
  // console.log(props.matches[0])
  return (
    <div className="live-matches-section">
      <h3>Live Matches</h3>
      {props.matches.length > 0 ? (
        <div className="matches-container">
          {props.matches.map((match, index) => (
            <Link 
              key={index} 
              to={`/football/${match._id}`} 
              className="match-link"
            >
              <div className="match-item">
                <h4>{match.teamA} vs {match.teamB}</h4>
                <h1>{match.scoreA} - {match.scoreB}</h1>
                <button className="seeContests">Contests</button>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No live matches currently.</p>
      )}
    </div>
  );
};

export default LiveMatches;
