import mongoose from 'mongoose';

const contestSchema = new mongoose.Schema({
  matchId: { type: mongoose.Schema.Types.ObjectId, ref: 'matches', required: true },
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'teams', required: true },
  fee: { type: Number, required: true },
  prize: { type: Number, required: true },
  leaderboard: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
      points: { type: Number, default: 0 },
    },
  ],
},{timestamps:true});

const Contest = mongoose.model('contests', contestSchema);
export default Contest
