import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  users: {
    type: [{
      role: {
        type: Number,
        required: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    }],
    default: [],
  },
  password: {
    type: String,
    required: true,
  },
});

export default LessonSchema;
