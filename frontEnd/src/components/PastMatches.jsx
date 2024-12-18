import React from "react";
import { Link } from "react-router-dom";

const PastMatches = (props) => {
  return (
    <div>
      <h3>Past Matches</h3>
      {props.matches.length > 0 ? (
        <div >
          {props.matches.map((match, index) => (
            <Link style={{ textDecoration: 'none' }} key={index} to={`/${match.name}`} ><div className="matches" >{match.name} <button className="seeContests">Contests</button></div></Link>
          ))}
        </div>
      ) : (
        <p>No past matches this week.</p>
      )}
    </div>
  );
};

export default PastMatches;
