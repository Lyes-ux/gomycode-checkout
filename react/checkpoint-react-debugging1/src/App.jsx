import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [count, setCount] = useState(0); // état pour un compteur
  const [name, setName] = useState(''); // état pour un nom

  const handleIncrement = () => setCount(count + 1); // fonction pour incrémenter le compteur
  const handleChangeName = (e) => setName(e.target.value); // fonction pour modifier le nom

  return (
    <div>
      <h1>Debugging React</h1>
      <button onClick={handleIncrement}>Increment</button>
      <input 
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Enter your name"
      />
      <ChildComponent count={count} name={name} />
    </div>
  );
}
export default App;
