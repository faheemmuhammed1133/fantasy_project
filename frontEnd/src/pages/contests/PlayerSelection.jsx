import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function PlayerSelection() {
  const navigate = useNavigate();
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [players] = useState([
    {
      id: 1,
      name: 'Virat Kohli',
      team: 'RCB',
      role: 'Batsman',
      points: 9.5,
      credits: 10.0,
    },
    {
      id: 2,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 9.0,
      credits: 9.5,
    },
    {
      id: 3,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 1.0,
      credits: 9.5,
    },
    {
      id: 4,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 1.0,
      credits: 5.5,
    },
    {
      id: 5,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 3.0,
      credits: 5.5,
    },
    {
      id: 6,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 5.0,
      credits: 5.5,
    },
    {
      id: 7,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 5.0,
      credits: 5.5,
    },
    {
      id: 8,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 5.0,
      credits: 5.5,
    },
    {
      id: 9,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 5.0,
      credits: 5.5,
    },
    {
      id: 10,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 5.0,
      credits: 5.5,
    },
    {
      id: 11,
      name: 'MS Dhoni',
      team: 'CSK',
      role: 'WK-Batsman',
      points: 5.0,
      credits: 5.5,
    },
    
    // Add more players
  ]);

  const handlePlayerSelection = (player) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleSubmit = () => {
    if (selectedPlayers.length === 11) {
      // TODO: Submit team
      navigate('/matches');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Select Players</h1>
        <div className="text-white">
          <span className="mr-4">{selectedPlayers.length}/11 Players</span>
          <button
            onClick={handleSubmit}
            disabled={selectedPlayers.length !== 11}
            className={`px-6 py-2 rounded-md ${
              selectedPlayers.length === 11
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            Create Team
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <motion.div
            key={player.id}
            whileHover={{ scale: 1.02 }}
            className={`bg-gray-800 rounded-lg p-4 cursor-pointer ${
              selectedPlayers.find(p => p.id === player.id)
                ? 'border-2 border-green-500'
                : ''
            }`}
            onClick={() => handlePlayerSelection(player)}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-white">{player.name}</h3>
              <span className="text-gray-400">{player.team}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>{player.role}</span>
              <span>{player.credits} Cr</span>
            </div>
            <div className="mt-2 text-sm text-green-400">
              {player.points} pts
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PlayerSelection;