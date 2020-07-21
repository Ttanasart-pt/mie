import React from 'react';

import data from '../data/playerData.json';
import oreData from '../data/oreData.json';

import icon_cart from '../svg/minecart.svg';
import CardMine from './cMine';

import './card.css';

class CardMines extends React.Component{
    constructor(props){
        super(props);
        setInterval(() => {
            this.setState(() => ({}));
        }, 1000);
    }
    getMineStorage(){
        this.mineStorage = data.mines.map((mine) => ({
            name : mine.name,
            active : mine.active,
            location : mine.location,
            capacity : mine.capacity,
            ore : mine.storage.map((_ore) => ({ 
                title: _ore.oreType, value: _ore.yield, color: oreData[_ore.oreType].color
            }))
        }));
        this.mineCount = data.mines.length;
    }

    render(){
        this.getMineStorage();
        return(
            <div className="card gr3">
                <h2 className="card-title">Mines</h2>
                <div className="card-content-list">
                    {
                        this.mineStorage.map((mine) => <CardMine mine={mine} />)
                    }
                </div>
                <div className="card-option">
                    <div className="card-icon" style={{"background-color":"#cccccc"}}><img src={icon_cart}/></div>
                    <h3>{this.mineCount}</h3>
                </div>
            </div>
        );
    }
}

export default CardMines;