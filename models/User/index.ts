import UserSchema from '@root/schemas/User';
import mongoose from 'mongoose';

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
