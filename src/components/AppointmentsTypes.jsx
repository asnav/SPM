import React, {useState} from 'react';
import './apptypes.css';

export default function AppointmentsTypes() {
  const initialList = [
    {
      id: 1,
      name: 'Robin',
      time: 10,
    },
    {
      id: 2,
      name: 'Dennis',
      time: 10,
    },
  ];
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('Regular');
  const [time, setTime] = useState(15);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeTime(event) {
    setTime(event.target.value);
  }

  function handleAdd() {
    const nameflag = name.length;
    let msg = '';
    if (time > 0 && nameflag > 0) {
      const num = Math.random();
      const newList = list.concat({id: num, name, time});

      setList(newList);

      setName('');
      return;
    }

    if (time <=0) {
      msg += 'Time cannot be 0 \n';
    }
    if (nameflag <=0) {
      msg += 'A field in the form cannot be empty \n';
    }
    alert(msg);
  }

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <div className="mainBox">
      <ul>
        {list.map((item) => (
          <div className="appointmemtbox" key={item.id}>
            <div className="flexbox">{item.name}</div>
            <div className="flexbox">{item.time}</div>
            <div className="flexbox">
              <button type="button" onClick={() => handleRemove(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>

      <div className="addbox">
        <div className="flexbox">
          <input type="text" value={name} onChange={handleChangeName} />
        </div>
        <div className="flexbox">
          <input type="number" value={time} onChange={handleChangeTime} />
        </div>
        <div className="flexbox">
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
