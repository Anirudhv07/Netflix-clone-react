import React from 'react';
import {action,originals} from "./url"

import "./App.css"
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Rowpost url={originals} title="Netflix Originals"/>
     <Rowpost url={action} title="Action" isSmall/>

    </div>
  );
}

export default App;
