import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UserSet from './components/UserSet.tsx';
import InformationSet from './components/informationSet.tsx';

function App() {
  return (   
    <div className="App">
      <UserSet/>
      <InformationSet/>
    </div>
  );
}


export default App;