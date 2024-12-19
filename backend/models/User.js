import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'] },
  dob: { type: Date },
  age: { type: Number },
  number: { type: String },
  mymatchesId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'mymatches' }],
  favTeam: { type: String },
  favPlayers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'players' }],
  transactions: [{ type: Number }],
  balance: { type: Number, default: 0 },
},{timestamps:true});

const User = mongoose.model('users', userSchema);
export default  User
