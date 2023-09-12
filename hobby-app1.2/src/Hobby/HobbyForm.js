import React, { useState } from 'react';
import "./HobbyForm.css"

function HobbyForm({ addHobby }) {
  const [hobby, setHobby] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hobby.trim() !== '' && description.trim() !== '') {
      addHobby(hobby, description);
      setHobby('');
      setDescription('');
    }
  };

  return (
    <div className='formdata'>
      <h2>Add Hobby</h2>
      <form onSubmit={handleSubmit}>
        <input className='form'
          type="text"
          placeholder="Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <input className='form'
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Hobby</button>
      </form>
    </div>
  );
}

export default HobbyForm;
