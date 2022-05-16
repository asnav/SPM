import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/user.js';
// eslint-disable-next-line new-cap
const userRouter = express.Router();
userRouter.post(
  '/SignUp',
  expressAsyncHandler(async (req, res) => {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      res.status(401).send({ message: 'Email is already use' });
    } else {
      const newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
      });
        // eslint-disable-next-line no-unused-vars
      const user = await newUser.save();
      console.log('work');
      // res.send({
      //     message: 'Success'
      // });
    }
  }),
);
export default userRouter;
