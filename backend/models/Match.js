import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  playersA: [{ type: mongoose.Schema.Types.ObjectId, ref: 'players' }],
  playersB: [{ type: mongoose.Schema.Types.ObjectId, ref: 'players' }],
  scoreA: { type: Number, default: 0 },
  scoreB: { type: Number, default: 0 },
  sport: { type: String, enum: ['cricket', 'football', 'nba'], required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['live', 'upcoming', 'past'], default: 'upcoming' },
});

const Match  = mongoose.model('matches', matchSchema);
export default Match
