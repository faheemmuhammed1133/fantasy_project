import MyMatch from '../models/MyMatch.js';

// Create a MyMatch
export const createMyMatch = async (req, res) => {
  try {
    const myMatch = new MyMatch(req.body);
    await myMatch.save();
    res.status(201).json(myMatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch all MyMatches
export const getMyMatches = async (req, res) => {
  try {
    const myMatches = await MyMatch.find().populate('teamId').populate('userId');
    res.status(200).json(myMatches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch MyMatch by User ID
export const getMyMatchesByUserId = async (req, res) => {
  try {
    const myMatches = await MyMatch.find({ userId: req.params.userId }).populate('teamId');
    res.status(200).json(myMatches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
