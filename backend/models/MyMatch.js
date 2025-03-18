import mongoose from 'mongoose';

const myMatchSchema = new mongoose.Schema({
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'team', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
},{timestamps:true});

const MyMatch = mongoose.model('mymatches', myMatchSchema);
export default MyMatch
