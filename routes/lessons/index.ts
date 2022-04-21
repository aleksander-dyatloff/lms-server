import { Router } from 'express';
import controller from '@utils/controller';
import Lesson from '@root/interfaces/Lesson';
import LessonModel from '@root/models/Lesson';
import UserModel from '@root/models/User';
import Roles from '@root/interfaces/Roles';
import { ObjectId } from 'mongodb';
import ResponseError from '@utils/ResponseError';

const lessonsRouter = Router();

lessonsRouter.post('/api/lessons', controller(async (req, res) => {
  const createdLesson = new LessonModel({
    ...req.body as Lesson,
    users: [
      {
        role: Roles.Admin,
        userId: req.body.owner,
      },
    ],
  });

  await createdLesson.save();

  createdLesson.owner = await UserModel.findById(createdLesson.owner);

  res.status(201).json({ ...createdLesson._doc, password: undefined });
}));

lessonsRouter.post('/api/lessons/all', controller(async (req, res) => {
  const { userId } = req.body;

  const lessons = await LessonModel.find({
    'users.userId': userId,
  });

  let index = 0;

  for await (const lesson of lessons) {
    lessons[index].owner = await UserModel.findById(lesson.owner);

    index++;
  }

  res.status(200).json(lessons);
}));

lessonsRouter.post('/api/lessons/login', controller(async (req, res) => {
  const { name, userId, password } = req.body;

  const loginedLesson = await LessonModel.findOne({
    name,
  });

  if (!loginedLesson) {
    throw new ResponseError(404, 'Lesson not found');
  }

  if (loginedLesson.password !== String(password)) {
    throw new ResponseError(401, 'Invalid lesson password');
  }

  if (loginedLesson.users.find((user) => new ObjectId(user.userId).equals(userId))) {
    throw new ResponseError(400, 'You already have this lesson');
  }

  loginedLesson.users.push({
    role: Roles.Cadet,
    userId,
  });

  await loginedLesson.save();

  res.status(200).json(loginedLesson);
}));

lessonsRouter.post('/api/lessons/:id', controller(async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;

  const lesson = await LessonModel.findById(id);

  const targetLesson = { ...lesson._doc };

  if (!targetLesson.users.find((user) => new ObjectId(user.userId).equals(userId))) {
    throw new ResponseError(403, 'You haven\'t access to this lesson');
  }

  const users = [];

  for await (const user of targetLesson.users) {
    const userInfo = await UserModel.findById(user.userId);

    users.push({ ...userInfo._doc, ...user._doc });
  }

  targetLesson.users = users;

  res.status(200).json(targetLesson);
}));

export default lessonsRouter;
