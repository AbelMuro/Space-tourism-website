import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import Destination from './Destination';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/destination' element={<Destination/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;