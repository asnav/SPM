import React from 'react';

export default function ClientAppointments() {
  const initialList = [
    {
      id: 1,
      barbername: 'Robin',
      date: '12/05',
      time: '10:00',
    },
    {
      id: 2,
      barbername: 'Dani',
      date: '13/05',
      time: '10:00',
    },
  ];

  function handleRemove() {}

  return (
    <div className="main">
      <ul>
        {initialList.map((item) => (
          <div className="clientAppointment" key={item.id}>
            <div className="clientAppointmentcontainer">
              <h4>{item.barbername}</h4>
              <p>{item.date}</p>
              <p>{item.time}</p>
              <button type="button" onClick={() => handleRemove(item.id)}>
                Cancel
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
