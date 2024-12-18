import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, enum: ['GK', 'DEF', 'MID', 'FW'], required: true },
  credits: { type: Number, required: true },
  pic: { type: String },
  pointsInMatch: { type: Number, default: 0 },
  points: [{ matchId: mongoose.Schema.Types.ObjectId, points: Number }],
});

const Player = mongoose.model('players', playerSchema);
export default Player
