import React from 'react';
import avatar from '../images/barber.png';

function BarberPage(props) {
  return (
    <div className="barber-page" key={props.id}>
      <h4>{props.name}</h4>
      <img src={avatar} alt="barberimage" />
      <p>{props.specialization}</p>
      <button type="button" onClick={() => props.setSelected(0)}>
        Return to list
      </button>
    </div>
  );
}

export default BarberPage;
