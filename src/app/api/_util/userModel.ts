import mongoose from "mongoose";

//Create the user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  verified: {type: Boolean, default: false},
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  
}, {
  timestamps: true
});


export default mongoose.models.User || mongoose.model('User', userSchema);