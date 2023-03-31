import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import Destination from './Destination';
import CrewPage from './CrewPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/destination' element={<Destination/>}/>
                <Route path='/crew' element={<CrewPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;