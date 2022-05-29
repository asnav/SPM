import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grow } from '@mui/material';
import avatar from '../images/barber.png';

function BarberCard(props) {
  const navigate = useNavigate();
  return (
    <Grow in style={{ transformOrigin: '0 0 0' }} {...({ timeout: 300 + 150 * props.id })}>
      <button type="button" className="cardbox" onClick={() => navigate(`/barber${props.id}`)}>
        <h4>{props.name}</h4>
        <img src={avatar} alt="barberimage" />
        <p>{props.specialization}</p>
      </button>
    </Grow>
  );
}

export default BarberCard;
