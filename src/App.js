import React from 'react';
import './App.css';
import './base.css';
import Sidebar from './fragment/sidebar';
import Dashboard from './fragment/dashboard';
import PlayerData from './data/playerData';

function App() {
    setInterval(() => {
        PlayerData.update();
    }, 1000);

    return (
        <div className="App">
            <div className="content">
                <Dashboard/>
            </div>
            <Sidebar />
        </div>
    );
}

export default App;
