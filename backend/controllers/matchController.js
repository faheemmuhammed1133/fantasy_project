import Match from '../models/Match.js';

// Create a match
export const createMatch = async (req, res) => {
  try {
    const match = new Match(req.body);
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const createMatches = async (req, res) => {
  try {

    if (!Array.isArray(req.body) || req.body.length === 0) {
      return res.status(400).json({ error: "Request body must be an array of matches." });
    }
    const matches = await Match.insertMany(req.body);
    // await match.save();
    res.status(201).json(matches);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch all matches
export const getMatches = async (req, res) => {
  try {
    const matches = await Match.find( );
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getMatch = async (req, res) => {
  try {
    const id=req.params.id
    // console.log(id)
    const match = await Match.findOne({ _id:id});
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
