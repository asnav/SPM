import React, {useState} from 'react';
import './images/barber.png';
import AppointmentsTypes from './components/AppointmentsTypes';


export default function BarberPersonalPage(props) {
  const [name, setName] = useState('Omer');
  const [type, setType] = useState('Hair');
  const [phone, setPhone] = useState('0546940513');
  const [mail, setMail] = useState('johndoe@example.com');
  const [openHouer, setOpenHouer] = useState('10:00');
  const [endHouer, setendHouer] = useState('17:00');
  const [nameState, setNameState] = useState(false);
  const [specialtyState, setSpecialtyState] = useState(false);
  const [phoneState, setPhoneState] = useState(false);
  const [mailState, setMailState] = useState(false);
  const [HouersState, setHouersState] = useState(false);
  const imageName = require('./barber.png');

  /* Check if string is email */
  function checkIfEmail(str) {
    // Regular expression to check if string is email
    const regexExp = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i; ;

    return regexExp.test(str);
  }

  function checkIfPhone(str) {
    const regexExp = /^[0][5][0-9][0-9]{3}[0-9]{4}$/gi;

    return regexExp.test(str);
  }

  function saveChanges(mail, phone) {
    const phoneflag = checkIfPhone(phone);
    const mailflag = checkIfEmail(mail);
    const nameempty = name.length;
    const typeempty = type.length;
    const mailmessege = 'Email must be from the pattern: name@site.suffix\n';
    const phonemessge = 'Phone must be from the pattern: 05(0-9)-123-4567 \n';
    const empty = 'A field in the form cannot be empty \n';
    let msg = '';

    if (!mailflag) {
      msg += mailmessege;
    }
    if (!phoneflag) {
      msg += phonemessge;
    }
    if (nameempty === 0 || typeempty === 0) {
      msg += empty;
    }
    alert(msg);
  }

  return (
    <div className="mainBox">
      <img src={imageName} alt="baber" />
      <div className="topBox">
        <h2>Hello, {name} ! </h2>
      </div>
      <div className="MiddleBox">
        <h3>
          Here are your details on the site, you can edit them using the edit
          button
        </h3>
        <div className="dataBox">
          <h3>Name: {name} </h3>
          {nameState ? (
            <input
              type="text"
              id="inputboxx"
              name="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : null}
          <button id="editButton" onClick={() => setNameState(!nameState)}>
            {' '}
            Edit
          </button>
        </div>
        <div className="dataBox">
          <h3>Specialty: {type} </h3>
          {specialtyState ? (
            <input
              type="text"
              id="inputboxx"
              name="fname"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          ) : null}
          <button
            id="editButton"
            onClick={() => setSpecialtyState(!specialtyState)}
          >
            {' '}
            Edit
          </button>
        </div>
        <div className="dataBox">
          <h3>Phone: {phone} </h3>
          {phoneState ? (
            <input
              type="text"
              id="inputboxx"
              name="fname"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : null}
          <button id="editButton" onClick={() => setPhoneState(!phoneState)}>
            {' '}
            Edit
          </button>
        </div>
        <div className="dataBox">
          <h3>Mail: {mail} </h3>
          {mailState ? (
            <input
              type="text"
              id="inputboxx"
              name="fname"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          ) : null}
          <button id="editButton" onClick={() => setMailState(!mailState)}>
            {' '}
            Edit
          </button>
        </div>
        <div className="dataBox">
          <h3>
            Open Hours: {openHouer} - {endHouer}
          </h3>
          {HouersState ? (
            <div className="hoursboxes">
              <input
                type="time"
                id="inputboxx2"
                name="fname"
                value={openHouer}
                onChange={(e) => setOpenHouer(e.target.value)}
              />
              <input
                type="time"
                id="inputboxx"
                name="fname"
                value={endHouer}
                onChange={(e) => setendHouer(e.target.value)}
              />
            </div>
          ) : null}
          <button id="editButton" onClick={() => setHouersState(!HouersState)}>
            {' '}
            Edit
          </button>
        </div>
        <button id="okButton" onClick={() => saveChanges(mail, phone)}>
          {' '}
          Save Changes{' '}
        </button>
      </div>
      <div className="ButtomeBox">
        <h3>Appointments Types </h3>
        <hr />
        <div className="appointmentsboxx">
          <AppointmentsTypes />
        </div>
      </div>
    </div>
  );
}
