import React, {useState} from 'react';
import Home from './App';

// Use something like react-router-dom to manage multiple pages/routes

export default function Routes() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    )
}

