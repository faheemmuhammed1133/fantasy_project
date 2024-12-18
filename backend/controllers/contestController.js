import Contest from '../models/Contest.js';

// Create a contest
export const createContest = async (req, res) => {
  try {
    const contest = new Contest(req.body);
    await contest.save();
    res.status(201).json(contest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch all contests
export const getContests = async (req, res) => {
  try {
    const contests = await Contest.find().populate('matchId').populate('teamId');
    res.status(200).json(contests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a contest by ID
export const getContestById = async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id).populate('matchId').populate('teamId');
    if (!contest) {
      return res.status(404).json({ message: 'Contest not found' });
    }
    res.status(200).json(contest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
