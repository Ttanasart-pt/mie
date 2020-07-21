import React from 'react';

import data from '../data/playerData.json';

import CardMines from '../cards/cMines';
import icon_coin from '../svg/coin.svg';

import './screen.css';
import CardAllMines from '../cards/cMineAll';

class Mines extends React.Component{
    constructor(props){
        super(props);

        setInterval(() => {
            this.setState(() => ({}));
        }, 1000);
    }

    render(){
        return(
            <div className="screen">
                <div><h1>Mines</h1></div>
                
                <div className="content-block">
                    <CardMines />
                    <CardAllMines />
                </div>

                <div className="player-data">
                    <div className="player-icon"><img src={icon_coin}/></div>
                    <h3>${data.money}</h3>
                </div>
            </div>
        );
    }
}

export default Mines;