import Player from '../models/Player.js';

// Create a player
export const createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createPlayers = async (req, res) => {
  try {
    // ensure array is send
    if (!Array.isArray(req.body) || req.body.length === 0) {
      return res.status(400).json({ error: "Request body must be an array of player." });
    }
    
    const players = await Player.insertMany(req.body);
    res.status(201).json(players);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Fetch all players
export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players+" "+Player.length);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch a player by ID
export const getPlayerById = async (req, res) => {
  try {
    const {_id} =req.params
     console.log(_id)
    const player = await Player.find({_id:_id});
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    // console.log(player)
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
