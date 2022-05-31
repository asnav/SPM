import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  clientemail: { type: String, required: true },
  barberemail: { type: String, required: true },
  appointmenttype: { type: String, default: 'personal time', required: true },
  appointmenttime: { type: String, required: true },
  appointmentdate: { type: Date, required: true },

});
const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;
