import React from 'react';
import avatar from '../images/barber.png';

function BarberCard(props) {
  return (
    <button type="button" className="cardbox" key={props.id} onClick={() => props.setSelected(props.id)}>
      <h4>{props.name}</h4>
      <img src={avatar} alt="barberimage" />
      <p>{props.specialization}</p>
    </button>
  );
}

export default BarberCard;
