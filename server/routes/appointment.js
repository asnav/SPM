import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Appointment from '../models/appointment.js';

const appointmentRouter = express.Router();

appointmentRouter.post(
  '/NewAppointment',
  expressAsyncHandler(async (req, res) => {
    const checkAppointment = await Appointment.findOne({
      clientemail: req.body.clientemail.toLowerCase().trim(),
      barberemail: req.body.barberemail.toLowerCase().trim(),
      appointmenttype: req.body.appointmenttype,
      appointmenttime: req.body.appointmenttime,
      appointmentdate: req.body.appointmentdate,
    });
    if (checkAppointment) {
      res.status(401).json({ message: 'Appointment is alredy exist' });
    } else {
      const newAppointment = new Appointment({
        clientemail: req.body.clientemail.toLowerCase().trim(),
        barberemail: req.body.barberemail.toLowerCase().trim(),
        appointmenttype: req.body.appointmenttype,
        appointmenttime: req.body.appointmenttime,
        appointmentdate: req.body.appointmentdate,
      });
      await newAppointment.save();
      res.status(200).json({ message: 'Appointment is created succssfuly' });
      // console.log('work');
    }
  }),
);
<<<<<<< HEAD
appointmentRouter.delete(
    '/',
    expressAsyncHandler(async (req, res) => {
        const checkAppointment = await Appointment.findOne({ clientemail: req.body.clientemail.toLowerCase().trim(),barberemail:req.body.barberemail.toLowerCase().trim(), appointmenttype: req.body.appointmenttype, appointmenttime: req.body.appointmenttime, appointmentdate:req.body.appointmentdate});
      if (checkAppointment) {
            await checkAppointment.remove();
            res.status(200).json({ message: 'Appointment is deleted succssfuly' });
      } else {
            res.status(401).json({ message: 'Appointment is not found' });
      }
    }),
  );
export default appointmentRouter;
=======
export default appointmentRouter;
>>>>>>> 028162514df313019616fc9449025e5b8ef5ab74
