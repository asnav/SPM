import React from 'react';
import Button from '@mui/material/Button';
import avatar from '../images/barber.png';

export default function BarberCard() {
  const list = [
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
  ];

  function handleRemove() {}

  return (
    <div>
      <ul>
        {list.map((item) => (
          <div className="cardbox" key={item.id}>
            <img src={avatar} alt="barberimage" />
            <h4>{item.name}</h4>
            <p>{item.specialization}</p>
            <Button type="button" onClick={() => handleRemove(item.id)}>
              Pick time
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
}
