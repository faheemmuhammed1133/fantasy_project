import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  matchId: { type: mongoose.Schema.Types.ObjectId, ref: 'matches', required: true },
  status: { type: String, enum: ['win', null], default: null },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'players' }],
  points: { type: Number, default: 0 },
},{timestamps:true});

const Team = mongoose.model('teams', teamSchema);
export default Team
