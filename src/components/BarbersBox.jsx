import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BarberCard from './BarberCard';
import BarberPage from './BarberPage';

function BarbersBox() {
  const [list] = useState([
    {
      id: 1,
      name: 'Robin',
      specialization: 'Beards',
    },
    {
      id: 2,
      name: 'Dennis',
      specialization: 'Hairstyles',
    },
    {
      id: 3,
      name: 'Itzik',
      specialization: 'Arsim',
    },
    {
      id: 4,
      name: 'Dani',
      specialization: 'Creatin',
    },
    {
      id: 5,
      name: 'Filip',
      specialization: 'long Hair',
    },
    {
      id: 6,
      name: 'Eitan',
      specialization: 'Resorization',
    },
    {
      id: 7,
      name: 'Yaniv',
      specialization: 'kids',
    },
    {
      id: 8,
      name: 'Efi',
      specialization: 'Curly hair',
    },
    {
      id: 9,
      name: 'Toni',
      specialization: 'Brides',
    },
    {
      id: 10,
      name: 'Daniel',
      specialization: 'Oldschool',
    },
  ]);
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <BarberPage
        name={list[selected - 1].name}
        specialization={list[selected - 1].specialization}
        setSelected={setSelected}
      />
    );
  }
  return (
    <Box className="barbers-box">
      {list.map((item) => (
        <BarberCard
          key={item.id}
          id={item.id}
          name={item.name}
          specialization={item.specialization}
          setSelected={setSelected}
        />
      ))}
    </Box>
  );
}

export default BarbersBox;
