import React, { useState } from 'react';
import "./HobbyList.css";
import HobbyForm from './HobbyForm';

function HobbyList() {
  const [hobbies, setHobbies] = useState([]);

  const addHobby = (hobby, description) => {
    const newHobby = { hobby, description };
    setHobbies([...hobbies, newHobby]);
  };

  return (
    <div className='list'>
      <h2>Hobbies List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Hobby</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {hobbies.map((hobby, index) => (
            <tr key={index}>
              <td>{hobby.hobby}</td>
              <td>{hobby.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <HobbyForm addHobby={addHobby} />
    </div>
  );
}

export default HobbyList;
