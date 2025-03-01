// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  
  const [listOfUser, setListOfUser] = useState([]);

  
  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Erreur', error);
      });
  }, []); 

  return (
    <div>
      <h1>Liste ta3 les utilisateurs :</h1>
      <ul>
        
        {listOfUser.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>L'email ta3ek: {user.email}</p>
            <p>Asmek kho: {user.username}</p>
            <p>Compagnie: {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
