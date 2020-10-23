import React from 'react';
import './App.css';
import Adress from './component/profile/adress';
import FullName from './component/profile/fullname';
import ProfilePhoto from './component/profile/profilephoto';

function App() {
  return (
    <div className="App">
    <ProfilePhoto />
    <FullName  /> 
    <Adress />
    </div>
  );
}

export default App;
