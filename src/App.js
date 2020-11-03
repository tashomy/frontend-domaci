import React, { useState } from 'react';
import './App.css';
import UserApp from './pages/Users';
import {users} from './services/user.service';

function App() {
  return (
    <div className="App">
      <div className="users">
        <ul>
          
        {
          users.map(user => {
            return (
              <>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <br></br>
              </>
            )
          })
        }
        </ul>
       
      </div>
    </div>
  )
}

export default App;
