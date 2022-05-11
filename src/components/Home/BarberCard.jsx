import React from 'react';
import '../barber.png';
import './barbercard.css';

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
  ];

  const imageName =
  require('../barber.png');

  function handleRemove(id) {}

  return (
    <div className="mainBoxx">
      <ul>
        {list.map((item) => (
          <div className="cardbox" key={item.id}>
            <img src={imageName} alt="baberimage" />
            <div className="containerbox">
              <h4>{item.name}</h4>
              <p>{item.specialization}</p>
              <button type="button" onClick={() => handleRemove(item.id)}>
                Pick time
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
