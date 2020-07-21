import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import data from '../data/playerData.json';
import mineData from '../data/minesData.json';
import oreData from '../data/oreData.json';

import CardMineSell from './cMineSell';

import './card.css';


class CardAllMines extends React.Component{
    constructor(props){
        super(props);
    }

    getMineYield(){
        this.mines = mineData.mines.map((mine) => ({
            name: mine.name,
            location: mine.location,
            capacity: mine.capacity,
            ore: mine.yield.map((_yie) => ({
                title: _yie.oreType, value: _yie.yield, color: oreData[_yie.oreType].color
            }))
        }));
    }

    render(){
        this.getMineYield();
        return(
            <div className="card gr3">
                <h2 className="card-title">All mines</h2>
                <div className="card-content-list">
                    {
                        this.mines.map((mine) => <CardMineSell mine={mine} />)
                    }
                </div>
            </div>
        );
    }
}

export default CardAllMines;