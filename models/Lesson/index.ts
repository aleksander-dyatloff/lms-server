import LessonSchema from '@root/schemas/Lesson';
import mongoose from 'mongoose';

const LessonModel = mongoose.model('Lesson', LessonSchema);

export default LessonModel;
