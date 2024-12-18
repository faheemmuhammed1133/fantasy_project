import React from "react";
import LiveMatches from "../components/LiveMatches";
import UpcomingMatches from "../components/UpcomingMatches";
import PastMatches from "../components/PastMatches";

const Football = () => {
  const liveMatches = [
    { name: "Team A vs Team B", scoreA: 1, scoreB: 2 },
    { name: "Team C vs Team D", scoreC: 1, scoreD: 2 },
  ];

  const upcomingMatches = [
    { name: "Team A vs Team B", scoreA: 1, scoreB: 2 },
    { name: "Team C vs Team D", scoreC: 1, scoreD: 2 },
  ];

  const pastMatches = [
    { name: "Team A vs Team B", scoreA: 1, scoreB: 2 },
    { name: "Team C vs Team D", scoreC: 1, scoreD: 2 },
  ];

  return (
    <div className="content">
      <h2>Football Matches</h2>
      <LiveMatches matches={liveMatches} />
      <UpcomingMatches matches={upcomingMatches} />
      <PastMatches matches={pastMatches} />
      
    </div>
  );
};

export default Football;
