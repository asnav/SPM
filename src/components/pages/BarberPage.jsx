import React from 'react';
import { useParams } from 'react-router-dom';
import { Grow, Box } from '@mui/material';
import avatar from '../../images/barber.png';
import barbersList from '../../barbersList.js';

function BarberPage() {
  const { id } = useParams();
  const currentBarber = barbersList[id - 1];
  return (
    <Box className="fullscreen-box">
      <Grow in {...({ timeout: 400 })}>
        <div className="barber-page">
          <h4>{currentBarber.name}</h4>
          <img src={avatar} alt="barberimage" />
          <p>{currentBarber.specialization}</p>
        </div>
      </Grow>
    </Box>
  );
}

export default BarberPage;
