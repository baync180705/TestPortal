import React from 'react';
import './App.css';
import LeftMenu from "../src/Components/LeftMenu.tsx"; // Assuming LeftMenu is a TSX component
import MainMenu from './Components/MainMenu.tsx'; // Assuming MainMenu is a TSX component

interface AppProps {} // Empty interface for now, can be extended later for props

function App(){
  return(
    <div id="main">
      <LeftMenu/>
      <MainMenu/>
    </div>
  );
}

export default App;
