import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import PlayerData from './data/playerData';

import Sidebar from './pages/sidebar';
import Dashboard from './pages/dashboard';
import Mines from "./pages/mines";

import './App.css';
import './base.css';

function App() {
    setInterval(() => {
        PlayerData.update();
    }, 1000);

    return (
        <div className="App">
            <HashRouter>
                <div className="content">
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/mines" component={Mines}/>
                </div>
            </HashRouter>
            <Sidebar />
        </div>
    );
}

export default App;
