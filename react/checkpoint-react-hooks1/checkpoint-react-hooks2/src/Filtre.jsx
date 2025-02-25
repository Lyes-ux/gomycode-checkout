
import React, { useState } from 'react';

function Filtre({ onFilter }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
    onFilter(e.target.value);  
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={title}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filtre;
