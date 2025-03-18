import React, { useEffect, useState } from "react";
import LiveMatches from "../components/LiveMatches";
import UpcomingMatches from "../components/UpcomingMatches";
import PastMatches from "../components/PastMatches";

const Football = () => {
  const [live, setLive] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);

  useEffect(() => {
    // Define the async function within the useEffect
    const fetchMatches = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/matches`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Filter matches based on their status
        const liveMatches = data.filter((match) => match.status === "live");
        const upcomingMatches = data.filter(
          (match) => match.status === "upcoming"
        );
        const pastMatches = data.filter((match) => match.status === "past");

        // Update the state
        setLive(liveMatches);
        setUpcoming(upcomingMatches);
        setPast(pastMatches);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchMatches();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="content">
      <h2>Football Matches</h2>
      <LiveMatches matches={live} />
      <UpcomingMatches matches={upcoming} />
      <PastMatches matches={past} />
    </div>
  );
};

export default Football;
