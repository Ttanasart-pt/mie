import React from 'react';
import CardSummary from '../cards/cSummary';
import CardMines from '../cards/cMines';
import CardContract from '../cards/cContracts';
import data from '../data/playerData.json';
import icon_coin from '../svg/coin.svg';
import './screen.css';

class Dashboard extends React.Component{
    render(){
        return(
            <div className="screen">
                <div>
                    <h1>Dashboard</h1>
                </div>
                
                <div className="content-block">
                    <CardSummary />
                    <CardMines />
                    <CardContract />
                </div>

                <div className="player-data">
                    <div className="player-icon"><img src={icon_coin}/></div>
                    <h3>${data.money}</h3>
                </div>
            </div>
        );
    }
}

export default Dashboard;