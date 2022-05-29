import React from 'react';
import Box from '@mui/material/Box';
import BarberCard from './BarberCard';
import barbersList from '../barbersList.js';

function BarbersBox() {
  return (
    <Box className="barbers-box">
      {barbersList.map((item) => (
        <BarberCard
          key={item.id}
          id={item.id}
          name={item.name}
          specialization={item.specialization}
        />
      ))}
    </Box>
  );
}

export default BarbersBox;
