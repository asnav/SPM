/* eslint-disable no-console */
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/user.js';
// eslint-disable-next-line new-cap
const userRouter = express.Router();

userRouter.post(
  '/SignUp',
  expressAsyncHandler(async (req, res) => {
    const checkUser = await User.findOne({ email: req.body.email.toLowerCase().trim() });
    if (checkUser) {
      res.status(401).json({ message: 'Email is already use' });
    } else {
      const newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email.toLowerCase().trim(),
        password: req.body.password,
      });
      await newUser.save();
      console.log('work');
    }
  }),
);

userRouter.post(
  '/Login',
  expressAsyncHandler(async (req, res) => {
    console.log('im in login');
    const checkUser = await User.findOne({
      email: req.body.email.toLowerCase().trim(),
      password: req.body.password,
    });
    if (checkUser) {
      res.status(200).send({ message: 'login succssful', user: checkUser });
    } else {
      res.status(401).send({ message: 'User not found' });
    }
  }),
);

export default userRouter;
