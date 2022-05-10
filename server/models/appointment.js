const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema({
  clientemail: { type: String, required: true, unique: true },
  barberemail: { type: String, required: true, unique: true },
  appointmenttype: { type: String, default:"personal time",required: true },
  appointmentdate:{type: Date,required:true},
},
);
const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;