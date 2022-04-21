import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  picture: String,
  email: {
    type: String,
    required: true,
  },
  gender: Number,
});

export default UserSchema;
